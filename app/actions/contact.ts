'use server';
import { prisma } from '@/lib/prisma';
import { contactFormSchema } from '@/lib/zod-schemas';
import { transporter } from '@/lib/nodemailer';

export async function submitContactForm(prevState: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  const result = contactFormSchema.safeParse(data);
  
  if (!result.success) return { success: false, errors: result.error.flatten().fieldErrors };

  try {
    await prisma.contactSubmission.create({ data: result.data });
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.EMAIL_RECIPIENT,
      subject: `Nouveau contact: ${result.data.name}`,
      html: `<p>Détails: ${JSON.stringify(result.data)}</p>`
    });
    return { success: true };
  } catch (e) {
    return { success: false, message: 'Erreur serveur' };
  }
}