import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(3, "Le nom d'utilisateur doit contenir au moins 3 caractères"),
  password: z.string().min(5, "Le mot de passe doit contenir au moins 5 caractères"),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  brandModel: z.string().optional(),
  fuelType: z.string().optional(),
  registrationDate: z.string().optional().transform(val => val ? new Date(val) : undefined),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export const productSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  stockQuantity: z.coerce.number().int().min(0, "La quantité ne peut pas être négative"),
  costPrice: z.coerce.number().positive("Le prix d'achat doit être strictement positif"),
  sellingPrice: z.coerce.number().positive("Le prix de vente doit être strictement positif"),
  imageUrl: z.string().url("L'URL de l'image doit être valide"),
  description: z.string().min(5, "La description est requise"),
  sectionId: z.string().min(1, "La section est obligatoire"),
});

export const sectionSchema = z.object({
  name: z.string().min(2, "Le nom de la section est requis"),
});