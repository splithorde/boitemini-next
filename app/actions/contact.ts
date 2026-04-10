"use server";
import { prisma } from '@/lib/prisma';
import { contactSchema } from '@/lib/zod-schemas';
import { transporter } from '@/lib/nodemailer';

export async function submitContactForm(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const result = contactSchema.safeParse(data);

  if (!result.success) return { success: false, errors: result.error.flatten().fieldErrors };

  await prisma.contactSubmission.create({ data: result.data });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.EMAIL_RECIPIENT,
    subject: "Nouveau message de contact",
    html: `<p>Détails: ${JSON.stringify(result.data)}</p>`,
  });

  return { success: true };
}