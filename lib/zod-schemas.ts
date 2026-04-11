import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, "Le nom est obligatoire"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  brandModel: z.string().optional(),
  fuelType: z.enum(["Essence", "Diesel", "Hybrid", "Electrique"]).optional(),
  registrationDate: z.string().optional().refine((val) => !val || !isNaN(Date.parse(val)), {
    message: "Date invalide",
  }),
  message: z.string().min(1, "Le message est obligatoire"),
});

export type ContactFormData = z.infer<typeof contactSchema>;