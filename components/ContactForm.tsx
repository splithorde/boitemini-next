"use client";
import { useForm } from 'react-hook-form';
import { submitContact } from '@/app/actions/contact';

export default function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => await submitContact(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-6 bg-gray-50 rounded-lg">
      <input {...register("nom")} placeholder="Nom" className="w-full p-2 border" required />
      <input {...register("email")} type="email" placeholder="Email" className="w-full p-2 border" required />
      <select {...register("carburant")} className="w-full p-2 border">
        <option value="Essence">Essence</option>
        <option value="Diesel">Diesel</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Electrique">Electrique</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Envoyer</button>
    </form>
  );
}