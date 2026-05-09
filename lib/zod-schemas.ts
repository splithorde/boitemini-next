import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  stockQuantity: z.coerce.number().int().nonnegative("La quantité ne peut pas être négative"),
  costPrice: z.coerce.number().nonnegative("Le prix d'achat ne peut pas être négatif"),
  sellingPrice: z.coerce.number().nonnegative("Le prix de vente ne peut pas être négatif"),
  imageUrl: z.string().url("L'URL de l'image est invalide"),
  description: z.string().min(1, "La description est requise"),
  sectionId: z.string().min(1, "La section est requise"),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Le nom est trop court"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  brandModel: z.string().optional(),
  fuelType: z.string().optional(),
  registrationDate: z.string().optional(),
  message: z.string().min(10, "Le message doit faire au moins 10 caractères"),
});