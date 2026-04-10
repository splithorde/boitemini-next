import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(2, 'Le nom est obligatoire'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  vehicle: z.string().min(2, 'La marque et le modèle sont requis'),
  fuel: z.enum(['Essence', 'Diesel', 'Hybrid', 'Electrique']),
  date: z.string().refine((val) => !isNaN(Date.parse(val)), { message: 'Date invalide' }),
  message: z.string().min(10, 'Le message doit faire au moins 10 caractères'),
});

export type ContactFormData = z.infer<typeof ContactSchema>;