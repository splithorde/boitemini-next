'use client';
import { useFormState } from 'react-dom';
import { submitContact } from '@/app/actions/contact';

export default function ContactForm() {
  const [state, action] = useFormState(submitContact, null);
  return (
    <form action={action} className="space-y-4 p-6 bg-gray-50 rounded-lg">
      {state?.success && <p className="text-green-600">Message envoyé avec succès !</p>}
      <input name="name" placeholder="Nom" className="w-full p-2 border rounded" required />
      <input name="email" type="email" placeholder="Email" className="w-full p-2 border rounded" required />
      <input name="phone" placeholder="Téléphone" className="w-full p-2 border rounded" />
      <input name="vehicle" placeholder="Marque et modèle" className="w-full p-2 border rounded" />
      <select name="fuel" className="w-full p-2 border rounded">
        {['Essence', 'Diesel', 'Hybrid', 'Electrique'].map(f => <option key={f} value={f}>{f}</option>)}
      </select>
      <input name="date" type="date" className="w-full p-2 border rounded" />
      <textarea name="message" placeholder="Votre message" className="w-full p-2 border rounded" />
      {state?.error && <p className="text-red-600 text-sm">Erreur de validation</p>}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Envoyer</button>
    </form>
  );
}