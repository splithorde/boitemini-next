import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  stockQuantity: z.coerce.number().int().min(0, "La quantité ne peut pas être négative"),
  costPrice: z.coerce.number().min(0, "Le prix d'achat ne peut pas être négatif"),
  sellingPrice: z.coerce.number().min(0, "Le prix de vente ne peut pas être négatif"),
  imageUrl: z.string().url("URL d'image invalide (ex: https://...)"),
  description: z.string().min(1, "La description est requise"),
  sectionId: z.string().min(1, "La section est requise"),
});