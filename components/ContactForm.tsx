"use client"
import { useFormState } from 'react-dom';
import { submitContact } from '@/app/actions/contact';

export default function ContactForm() {
  const [state, action] = useFormState(submitContact, { success: false });
  return (
    <form action={action} className="space-y-4 p-6 bg-white rounded-lg shadow-md">
      <input name="name" placeholder="Nom" className="w-full border p-2" required />
      <input name="email" type="email" placeholder="Email" className="w-full border p-2" required />
      <select name="fuelType" className="w-full border p-2">
        <option value="Essence">Essence</option>
        <option value="Diesel">Diesel</option>
        <option value="Hybrid">Hybrid</option>
        <option value="Electrique">Electrique</option>
      </select>
      <textarea name="message" placeholder="Message" className="w-full border p-2" required />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2">Envoyer</button>
      {state.success && <p className="text-green-600">Message envoyé !</p>}
    </form>
  );
}