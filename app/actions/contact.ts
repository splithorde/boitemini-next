'use server';
import { contactSchema } from '@/lib/zod-schemas';
import { transporter } from '@/lib/nodemailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function submitContact(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const validation = contactSchema.safeParse(data);

  if (!validation.success) return { success: false, errors: validation.error.flatten().fieldErrors };

  try {
    await prisma.contactSubmission.create({ data: validation.data });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: 'Nouveau message contact Garage',
      html: `<h1>Nouveau contact</h1><pre>${JSON.stringify(validation.data, null, 2)}</pre>`
    });
    return { success: true };
  } catch (e) {
    return { success: false, message: 'Erreur serveur' };
  }
}