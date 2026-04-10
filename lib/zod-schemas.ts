import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom est obligatoire'),
  email: z.string().email('Format email invalide'),
  phone: z.string().optional(),
  vehicle: z.string().min(2, 'La marque et modèle sont obligatoires'),
  fuel: z.enum(['Essence', 'Diesel', 'Hybrid', 'Electrique']),
  date: z.string().min(1, 'Date obligatoire'),
  message: z.string().min(10, 'Le message est trop court')
});