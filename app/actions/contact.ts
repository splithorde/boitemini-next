"use server";

import { prisma } from '@/lib/prisma';
import { transporter } from '@/lib/nodemailer';
import { ContactSchema } from '@/lib/zod-schemas';

export async function submitContact(prevState: any, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  const validated = ContactSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      errors: validated.error.flatten().fieldErrors,
    };
  }

  const data = validated.data;

  try {
    await prisma.contactSubmission.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        carModel: data.carModel,
        fuelType: data.fuelType || null,
        regDate: data.regDate,
        message: data.message,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_RECIPIENT || 'kbertrand512@gmail.com',
      subject: `Nouveau contact : ${data.name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${data.name}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p><strong>Téléphone :</strong> ${data.phone || 'Non renseigné'}</p>
        <p><strong>Véhicule :</strong> ${data.carModel || 'Non renseigné'}</p>
        <p><strong>Carburant :</strong> ${data.fuelType || 'Non renseigné'}</p>
        <p><strong>Date MEC :</strong> ${data.regDate || 'Non renseigné'}</p>
        <p><strong>Message :</strong><br/>${data.message.replace(/\n/g, '<br/>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: "Votre message a été envoyé avec succès !" };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, message: "Une erreur est survenue lors de l'envoi." };
  }
}