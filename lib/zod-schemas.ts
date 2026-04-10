import { z } from 'zod';
export const ContactSchema = z.object({
  name: z.string().min(2, 'Le nom est requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  vehicle: z.string().min(2, 'Le modèle du véhicule est requis'),
  fuel: z.enum(['Essence', 'Diesel', 'Hybrid', 'Electrique']),
  date: z.string().min(1, 'La date est requise'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});