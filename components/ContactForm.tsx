'use client';

import { useActionState, useEffect, useRef } from 'react';
import { submitContact } from '@/app/actions/contact';

const initialState = {
  success: false,
  errors: {},
  message: '',
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {state.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name[0]}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {state.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email[0]}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 mb-1">Marque et modèle</label>
          <input
            id="carModel"
            name="carModel"
            type="text"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        <div>
          <label htmlFor="fuel" className="block text-sm font-medium text-gray-700 mb-1">Type de carburant</label>
          <select
            id="fuel"
            name="fuel"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="">Sélectionner...</option>
            <option value="Essence">Essence</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electrique">Electrique</option>
          </select>
        </div>

        <div>
          <label htmlFor="registrationDate" className="block text-sm font-medium text-gray-700 mb-1">Date de mise en circulation</label>
          <input
            id="registrationDate"
            name="registrationDate"
            type="date"
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        ></textarea>
        {state.errors?.message && <p className="text-red-500 text-xs mt-1">{state.errors.message[0]}</p>}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition duration-300 disabled:opacity-50"
      >
        {isPending ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>

      {state.message && (
        <p className={`text-center mt-4 p-3 rounded ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}