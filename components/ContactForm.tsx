'use client';
import { useFormState } from 'react-dom';
import { submitContactForm } from '@/app/actions/contact';

export default function ContactForm() {
  const [state, action] = useFormState(submitContactForm, null);
  return (
    <form action={action} className="space-y-4 p-6 bg-gray-50 rounded-lg shadow-sm">
      <input name="name" placeholder="Nom" className="w-full p-2 border" required />
      <input name="email" type="email" placeholder="Email" className="w-full p-2 border" required />
      <input name="phone" placeholder="Téléphone" className="w-full p-2 border" />
      <input name="vehicle" placeholder="Marque et modèle" className="w-full p-2 border" required />
      <select name="fuel" className="w-full p-2 border">
        {['Essence', 'Diesel', 'Hybrid', 'Electrique'].map(f => <option key={f} value={f}>{f}</option>)}
      </select>
      <input name="date" type="date" className="w-full p-2 border" required />
      <textarea name="message" placeholder="Votre message" className="w-full p-2 border" required />
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">Envoyer</button>
      {state?.success && <p className="text-green-600">Message envoyé avec succès !</p>}
    </form>
  );
}