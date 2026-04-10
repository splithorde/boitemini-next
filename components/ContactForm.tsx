'use client';
import { useFormState } from 'react-dom';
import { submitContact } from '@/app/actions/contact';

export default function ContactForm() {
  const [state, action] = useFormState(submitContact, { success: false });
  if (state.success) return <p className="text-green-600">Message envoyé avec succès !</p>;
  return (
    <form action={action} className="space-y-4">
      <input name="name" placeholder="Nom" className="w-full border p-2" required />
      <input name="email" type="email" placeholder="Email" className="w-full border p-2" required />
      <select name="fuel" className="w-full border p-2">
        {['Essence', 'Diesel', 'Hybrid', 'Electrique'].map(f => <option key={f} value={f}>{f}</option>)}
      </select>
      <textarea name="message" placeholder="Message" className="w-full border p-2" required />
      <button className="bg-blue-600 text-white px-4 py-2">Envoyer</button>
    </form>
  );
}