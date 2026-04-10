"use client";
import { useActionState } from 'react';
import { submitContact } from '@/app/actions/contact';

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, { success: false });
  return (
    <form action={action} className="space-y-4">
      {state?.success && <p className="text-green-600">Envoyé avec succès !</p>}
      <input name="name" aria-label="Nom" placeholder="Nom" className="w-full border p-2" required />
      {state?.errors?.name && <p className="text-red-500 text-sm">{state.errors.name[0]}</p>}
      <input name="email" type="email" aria-label="Email" placeholder="Email" className="w-full border p-2" required />
      <textarea name="message" aria-label="Message" placeholder="Votre message (min 10 car.)" className="w-full border p-2" required />
      <button type="submit" disabled={pending} className="bg-blue-600 text-white p-2 w-full">Envoyer</button>
    </form>
  );
}