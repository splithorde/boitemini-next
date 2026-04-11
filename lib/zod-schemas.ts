import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, "Le nom est obligatoire"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  brandModel: z.string().optional(),
  fuelType: z.enum(["Essence", "Diesel", "Hybrid", "Electrique", ""]).optional(),
  registrationDate: z.string().optional().transform((val) => val ? new Date(val) : undefined),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export type ContactFormData = z.infer<typeof contactSchema>;