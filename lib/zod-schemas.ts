import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  brandModel: z.string().optional(),
  fuelType: z.string().optional(),
  registrationDate: z.string().optional(),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export const loginSchema = z.object({
  username: z.string().min(1, "Identifiant requis"),
  password: z.string().min(1, "Mot de passe requis"),
});