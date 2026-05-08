import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Le nom d'utilisateur est requis"),
  password: z.string().min(1, "Le mot de passe est requis"),
});

export const productSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  stockQuantity: z.coerce.number().int().min(0),
  costPrice: z.coerce.number().min(0),
  sellingPrice: z.coerce.number().min(0),
  imageUrl: z.string().url("L'URL de l'image est invalide"),
  description: z.string().min(1, "La description est requise"),
  sectionId: z.string().min(1, "La section est requise"),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Message trop court"),
});
