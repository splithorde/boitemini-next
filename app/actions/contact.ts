"use server";

import { prisma } from '@/lib/prisma';
import { transporter } from '@/lib/nodemailer';
import { ContactFormSchema } from '@/lib/zod-schemas';

export async function submitContactForm(prevState: any, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  
  const validatedFields = ContactFormSchema.safeParse(rawData);

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
        customerName: data.customerName,
        customerEmail: data.customerEmail,
        customerPhone: data.customerPhone || null,
        vehicleBrand: data.vehicleBrand || null,
        fuelType: data.fuelType || null,
        registrationDate: data.registrationDate,
        message: data.message,
      },
    });

    // 2. Send Email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `Nouveau message de ${data.customerName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #075985;">Nouvelle demande de contact</h2>
          <p><strong>Nom:</strong> ${data.customerName}</p>
          <p><strong>Email:</strong> ${data.customerEmail}</p>
          <p><strong>Téléphone:</strong> ${data.customerPhone || 'Non renseigné'}</p>
          <p><strong>Véhicule:</strong> ${data.vehicleBrand || 'Non renseigné'}</p>
          <p><strong>Carburant:</strong> ${data.fuelType || 'Non renseigné'}</p>
          <p><strong>Date MEC:</strong> ${data.registrationDate ? data.registrationDate.toLocaleDateString() : 'Non renseigné'}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${data.message}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true, message: "Votre message a été envoyé avec succès !" };
  } catch (error) {
    console.error("Form submission error:", error);
    return { success: false, message: "Une erreur est survenue lors de l'envoi." };
  }
}