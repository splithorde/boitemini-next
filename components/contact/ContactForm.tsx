"use client"
import { useForm } from 'react-hook-form';
import { submitContact } from '@/actions/contact';

export default function ContactForm() {
  const { register, handleSubmit } = useForm();
  return (
    <form onSubmit={handleSubmit(async (d) => await submitContact(d as any))} className="space-y-4 max-w-lg mx-auto p-6 bg-white shadow-md rounded">
      <input {...register('nom', { required: true })} placeholder="Nom" className="w-full p-2 border" />
      <input {...register('email', { required: true })} type="email" placeholder="Email" className="w-full p-2 border" />
      <input {...register('telephone')} placeholder="Téléphone" className="w-full p-2 border" />
      <input {...register('vehicule')} placeholder="Marque et modèle" className="w-full p-2 border" />
      <select {...register('carburant')} className="w-full p-2 border">
        <option value="">Type de carburant</option>
        <option value="Essence">Essence</option><option value="Diesel">Diesel</option>
        <option value="Hybrid">Hybrid</option><option value="Electrique">Electrique</option>
      </select>
      <input {...register('miseEnCirculation')} type="date" className="w-full p-2 border" />
      <textarea {...register('message')} placeholder="Message" className="w-full p-2 border" />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Envoyer</button>
    </form>
  );
}