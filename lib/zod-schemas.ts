import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  vehicle: z.string().optional(),
  fuel: z.enum(['Essence', 'Diesel', 'Hybrid', 'Electrique']),
  date: z.string().optional(),
  message: z.string().min(10, "Le message doit faire au moins 10 caractères")
});