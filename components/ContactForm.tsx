"use client";
import { useFormState } from 'react-dom';
import { submitContactForm } from '@/app/actions/contact';

export default function ContactForm() {
  const [state, action] = useFormState(submitContactForm, null);
  return (
    <form action={action} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      {state?.success && <p className="text-green-600">Message envoyé !</p>}
      <input name="name" placeholder="Nom" className="w-full p-2 border rounded" required />
      <input name="email" type="email" placeholder="Email" className="w-full p-2 border rounded" required />
      <input name="phone" placeholder="Téléphone" className="w-full p-2 border rounded" />
      <input name="vehicle" placeholder="Marque et modèle" className="w-full p-2 border rounded" />
      <select name="fuel" className="w-full p-2 border rounded">
        <option value="Essence">Essence</option>
        <option value="Diesel">Diesel</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Electrique">Electrique</option>
      </select>
      <input name="date" type="date" className="w-full p-2 border rounded" />
      <textarea name="message" placeholder="Message" className="w-full p-2 border rounded" required />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Envoyer</button>
    </form>
  );
}