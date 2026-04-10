"use server";
import { ContactSchema } from '@/lib/zod-schemas';
import { prisma } from '@/lib/prisma'; // Assumes client is exported here
import { transporter } from '@/lib/nodemailer';

export async function submitContact(data: any) {
  const result = ContactSchema.safeParse(data);
  if (!result.success) return { success: false, error: "Validation failed" };

  await prisma.contactSubmission.create({ data: result.data });
  
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.EMAIL_RECIPIENT,
    subject: `Nouveau contact de ${result.data.nom}`,
    html: `<p>Détails: ${JSON.stringify(result.data)}</p>`
  });

  return { success: true };
}