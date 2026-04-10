"use server";
import { prisma } from '@/lib/prisma';
import { ContactSchema } from '@/lib/zod-schemas';
import { transporter } from '@/lib/nodemailer';

export async function submitContact(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData);
  const validation = ContactSchema.safeParse(data);
  if (!validation.success) return { success: false, errors: validation.error.flatten().fieldErrors };

  try {
    await prisma.contactSubmission.create({ data: validation.data });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: 'Nouveau message de contact',
      html: `<p>Message reçu de ${validation.data.name}</p>`
    });
    return { success: true };
  } catch (e) {
    return { success: false, message: "Erreur serveur" };
  }
}