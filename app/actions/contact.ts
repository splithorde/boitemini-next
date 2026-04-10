"use server";
import { contactSchema } from '@/lib/zod-schemas';
import { prisma } from '@/lib/prisma';
import { transporter } from '@/lib/nodemailer';

export async function submitContact(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const result = contactSchema.safeParse(data);

  if (!result.success) return { success: false, errors: result.error.flatten().fieldErrors };

  try {
    await prisma.contactSubmission.create({ data: result.data });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: "Nouveau message de contact",
      html: `<pre>${JSON.stringify(result.data, null, 2)}</pre>`
    });
    return { success: true };
  } catch (e) {
    return { success: false, message: "Erreur lors de l'envoi." };
  }
}