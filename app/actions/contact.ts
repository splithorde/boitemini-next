'use server';
import { prisma } from '@/lib/prisma';
import { ContactSchema } from '@/lib/zod-schemas';
import nodemailer from 'nodemailer';

export async function submitContact(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData);
  const parsed = ContactSchema.safeParse(data);
  if (!parsed.success) return { error: parsed.error.flatten().fieldErrors };
  try {
    await prisma.contactSubmission.create({ data: parsed.data });
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `Nouveau message de ${parsed.data.name}`,
      html: `<p>Détails: ${JSON.stringify(parsed.data)}</p>`,
    });
    return { success: true };
  } catch (e) { return { error: { form: ['Une erreur est survenue lors de l\'envoi.'] } }; }
}