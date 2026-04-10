import { z } from 'zod';

export const ContactSchema = z.object({
  nom: z.string().min(2, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  vehicule: z.string().min(3, "Marque et modèle requis"),
  carburant: z.enum(["Essence", "Diesel", "Hybrid", "Electrique"]),
  dateMiseCirculation: z.string().min(4, "Date requise"),
  message: z.string().min(10, "Message trop court")
});