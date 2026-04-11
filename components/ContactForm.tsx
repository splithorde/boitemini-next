"use client";

import { useActionState, useEffect, useRef } from 'react';
import { submitContact } from '@/app/actions/contact';

const FUEL_TYPES = ["Essence", "Diesel", "Hybrid", "Electrique"];

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
      {state?.message && (
        <div className={`p-3 rounded ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {state.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom *</label>
          <input id="name" name="name" type="text" required className="mt-1 block w-full border rounded-md p-2 border-gray-300 focus:border-accent focus:ring-accent" />
          {state?.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name[0]}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
          <input id="email" name="email" type="email" required className="mt-1 block w-full border rounded-md p-2 border-gray-300 focus:border-accent focus:ring-accent" />
          {state?.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email[0]}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Téléphone</label>
          <input id="phone" name="phone" type="tel" className="mt-1 block w-full border rounded-md p-2 border-gray-300 focus:border-accent focus:ring-accent" />
        </div>
        <div>
          <label htmlFor="carModel" className="block text-sm font-medium text-gray-700">Marque et modèle</label>
          <input id="carModel" name="carModel" type="text" className="mt-1 block w-full border rounded-md p-2 border-gray-300 focus:border-accent focus:ring-accent" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700">Type de carburant</label>
          <select id="fuelType" name="fuelType" className="mt-1 block w-full border rounded-md p-2 border-gray-300 focus:border-accent focus:ring-accent">
            <option value="">Sélectionner...</option>
            {FUEL_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="regDate" className="block text-sm font-medium text-gray-700">Date de mise en circulation</label>
          <input id="regDate" name="regDate" type="date" className="mt-1 block w-full border rounded-md p-2 border-gray-300 focus:border-accent focus:ring-accent" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message *</label>
        <textarea id="message" name="message" rows={4} required className="mt-1 block w-full border rounded-md p-2 border-gray-300 focus:border-accent focus:ring-accent"></textarea>
        {state?.errors?.message && <p className="text-red-500 text-xs mt-1">{state.errors.message[0]}</p>}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-accent text-white py-2 px-4 rounded-md hover:bg-accent-dark disabled:bg-gray-400 transition-colors"
      >
        {isPending ? "Envoi en cours..." : "Envoyer le message"}
      </button>
    </form>
  );
}