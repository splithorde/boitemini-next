"use server"
import { prisma } from '@/lib/prisma';
import { ContactSchema } from '@/lib/zod-schemas';
import nodemailer from 'nodemailer';

export async function submitContact(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const result = ContactSchema.safeParse(data);

  if (!result.success) return { success: false, errors: result.error.flatten().fieldErrors };

  try {
    await prisma.contactSubmission.create({ data: result.data });
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: "Nouveau message garage",
      html: `<pre>${JSON.stringify(result.data, null, 2)}</pre>`
    });
    return { success: true };
  } catch { return { success: false, message: "Erreur serveur" }; }
}