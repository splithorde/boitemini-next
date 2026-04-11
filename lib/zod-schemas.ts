import { z } from 'zod';

export const FuelTypeEnum = z.enum(["Essence", "Diesel", "Hybrid", "Electrique"]);

export const ContactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  carBrandModel: z.string().optional(),
  fuel: z.union([FuelTypeEnum, z.literal("")]).optional(),
  registrationDate: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;