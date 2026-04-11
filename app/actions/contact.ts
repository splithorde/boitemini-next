'use server';

import { prisma } from '@/lib/prisma';
import { ContactSchema } from '@/lib/zod-schemas';
import { transporter } from '@/lib/nodemailer';

export async function submitContactForm(prevState: any, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  
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
        phone: data.phone || null,
        carModel: data.carModel || null,
        fuelType: data.fuelType || null,
        regDate: data.regDate || null,
        message: data.message,
      },
    });

    // 2. Send Email
    const htmlContent = `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom :</strong> ${data.name}</p>
      <p><strong>Email :</strong> ${data.email}</p>
      <p><strong>Téléphone :</strong> ${data.phone || 'Non renseigné'}</p>
      <p><strong>Véhicule :</strong> ${data.carModel || 'Non renseigné'}</p>
      <p><strong>Carburant :</strong> ${data.fuelType || 'Non renseigné'}</p>
      <p><strong>Mise en circulation :</strong> ${data.regDate || 'Non renseigné'}</p>
      <p><strong>Message :</strong></p>
      <p>${data.message.replace(/\n/g, '<br>')}</p>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_RECIPIENT || 'kbertrand512@gmail.com',
      subject: `Nouveau message de ${data.name} - BoiteMini`,
      html: htmlContent,
    });

    return { success: true, message: "Votre message a été envoyé avec succès !" };
  } catch (error) {
    console.error('Submission error:', error);
    return { 
      success: false, 
      message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer plus tard." 
    };
  }
}