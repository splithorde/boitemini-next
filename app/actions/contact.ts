'use server';

import { prisma } from '@/lib/prisma';
import transporter from '@/lib/nodemailer';
import { ContactSchema } from '@/lib/zod-schemas';

export async function submitContact(prevState: any, formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    carModel: formData.get('carModel'),
    fuel: formData.get('fuel'),
    registrationDate: formData.get('registrationDate'),
    message: formData.get('message'),
  };

  const validatedFields = ContactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Veuillez corriger les erreurs dans le formulaire.",
    };
  }

  const { name, email, phone, carModel, fuel, registrationDate, message } = validatedFields.data;

  try {
    // 1. Persistence
    await prisma.contactSubmission.create({
      data: {
        name,
        email,
        phone,
        carModel,
        fuelType: fuel,
        registrationDate: registrationDate ? new Date(registrationDate) : null,
        message,
      },
    });

    // 2. Email Notification
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `Nouveau message de contact : ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #2563eb;">Nouveau message de contact</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Téléphone :</strong> ${phone || 'N/A'}</p>
          <hr />
          <p><strong>Véhicule :</strong> ${carModel || 'N/A'}</p>
          <p><strong>Carburant :</strong> ${fuel || 'N/A'}</p>
          <p><strong>Mise en circulation :</strong> ${registrationDate || 'N/A'}</p>
          <hr />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Votre message a été envoyé avec succès !",
    };
  } catch (error) {
    console.error("Submission error:", error);
    return {
      success: false,
      message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard.",
    };
  }
}