import { z } from 'zod';

export const ContactSchema = z.object({
  name: z.string().min(2, "Le nom est obligatoire"),
  email: z.string().email("L'adresse mail est obligatoire et doit être valide"),
  phone: z.string().optional(),
  carModel: z.string().optional(),
  fuelType: z.enum(['Essence', 'Diesel', 'Hybrid', 'Electrique', '']).optional(),
  regDate: z.string().optional(),
  message: z.string().min(10, "Le message est obligatoire (min. 10 caractères)"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;