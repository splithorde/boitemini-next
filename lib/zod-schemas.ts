import { z } from 'zod';

export const ContactFormSchema = z.object({
  customerName: z.string().min(2, "Le nom est obligatoire"),
  customerEmail: z.string().email("Email invalide"),
  customerPhone: z.string().optional(),
  vehicleBrand: z.string().optional(),
  fuelType: z.enum(['Essence', 'Diesel', 'Hybrid', 'Electrique', '']).optional(),
  registrationDate: z.string().optional().transform(val => val ? new Date(val) : null),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;