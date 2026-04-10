"use server"
import { z } from 'zod';
import { prisma } from '@/lib/prisma';
import { transporter } from '@/lib/mail';

const schema = z.object({
  nom: z.string().min(2), email: z.string().email(),
  telephone: z.string().optional(), vehicule: z.string().optional(),
  carburant: z.string().optional(), miseEnCirculation: z.string().optional(), message: z.string().min(10)
});

export async function submitContact(data: z.infer<typeof schema>) {
  const validated = schema.parse(data);
  await prisma.contactSubmission.create({ data: validated });
  await transporter.sendMail({
    from: process.env.SMTP_USER, to: 'kbertrand512@gmail.com', subject: 'Nouveau message de contact',
    html: `<h1>Nouveau message</h1><p>${JSON.stringify(validated, null, 2)}</p>`
  });
  return { success: true };
}