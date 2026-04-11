'use server';

import { prisma } from '@/lib/prisma';
import transporter from '@/lib/nodemailer';
import { ContactSchema } from '@/lib/zod-schemas';

export async function submitContactForm(prevState: any, formData: FormData) {
  const rawData = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    carBrandModel: formData.get('carBrandModel'),
    fuel: formData.get('fuel'),
    registrationDate: formData.get('registrationDate'),
    message: formData.get('message'),
  };

  const validatedFields = ContactSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const data = validatedFields.data;

  try {
    // 1. Save to Database
    await prisma.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        carBrandModel: data.carBrandModel,
        fuelType: data.fuel,
        registrationDate: data.registrationDate,
        message: data.message,
      },
    });

    // 2. Send Email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_RECIPIENT || "kbertrand512@gmail.com",
      subject: `Nouveau message contact de ${data.name}`,
      html: `
        <h1>Nouvelle demande de contact</h1>
        <p><strong>Nom :</strong> ${data.name}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Téléphone :</strong> ${data.phone || 'Non renseigné'}</p>
        <p><strong>Véhicule :</strong> ${data.carBrandModel || 'Non renseigné'}</p>
        <p><strong>Carburant :</strong> ${data.fuel || 'Non renseigné'}</p>
        <p><strong>Mise en circulation :</strong> ${data.registrationDate || 'Non renseigné'}</p>
        <p><strong>Message :</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: "Votre message a été envoyé avec succès !" };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, message: "Une erreur est survenue lors de l'envoi." };
  }
}