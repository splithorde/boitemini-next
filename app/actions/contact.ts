"use server";

import { prisma } from "@/lib/prisma";
import { contactSchema } from "@/lib/zod-schemas";
import { transporter } from "@/lib/nodemailer";

export async function submitContactForm(formData: FormData) {
  try {
    const rawData = Object.fromEntries(formData.entries());
    const validated = contactSchema.parse(rawData);

    // 1. Save to Database
    const submission = await prisma.contactSubmission.create({
      data: {
        ...validated,
        registrationDate: validated.registrationDate ? new Date(validated.registrationDate) : null,
      },
    });

    // 2. Send Email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_RECIPIENT || 'kbertrand512@gmail.com',
      subject: `Nouveau message contact de ${validated.name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2 style="color: #1e40af;">Nouvelle demande de contact</h2>
          <p><strong>Client :</strong> ${validated.name}</p>
          <p><strong>Email :</strong> ${validated.email}</p>
          <p><strong>Téléphone :</strong> ${validated.phone || 'Non renseigné'}</p>
          <hr />
          <p><strong>Véhicule :</strong> ${validated.brandModel || 'Non renseigné'}</p>
          <p><strong>Carburant :</strong> ${validated.fuelType || 'Non renseigné'}</p>
          <p><strong>Mise en circulation :</strong> ${validated.registrationDate || 'Non renseignée'}</p>
          <hr />
          <p><strong>Message :</strong></p>
          <p style="white-space: pre-wrap;">${validated.message}</p>
          <br />
          <p style="font-size: 12px; color: #666;">ID Soumission: ${submission.id}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error("Contact submission error:", error);
    return { success: false, error: "Une erreur est survenue lors de l'envoi." };
  }
}