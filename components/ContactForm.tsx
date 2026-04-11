'use client';

import { useActionState } from 'react';
import { submitContactForm } from '@/app/actions/contact';

const initialState = {
  success: false,
  errors: {},
  message: '',
};

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, initialState);

  return (
    <form action={action} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Nom du client *</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-600 outline-none transition-all"
            placeholder="Jean Dupont"
            required
          />
          {state?.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Mail du client *</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-600 outline-none transition-all"
            placeholder="jean.dupont@example.com"
            required
          />
          {state?.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-600 outline-none transition-all"
            placeholder="06 12 34 56 78"
          />
        </div>
        <div>
          <label htmlFor="carModel" className="block text-sm font-semibold text-gray-700 mb-2">Marque et modèle</label>
          <input
            type="text"
            id="carModel"
            name="carModel"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-600 outline-none transition-all"
            placeholder="Mini Cooper S"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="fuelType" className="block text-sm font-semibold text-gray-700 mb-2">Type de carburant</label>
          <select
            id="fuelType"
            name="fuelType"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-600 outline-none transition-all"
          >
            <option value="">Sélectionner...</option>
            <option value="Essence">Essence</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electrique">Electrique</option>
          </select>
        </div>
        <div>
          <label htmlFor="regDate" className="block text-sm font-semibold text-gray-700 mb-2">Date de mise en circulation</label>
          <input
            type="date"
            id="regDate"
            name="regDate"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-600 outline-none transition-all"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message libre *</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-600 outline-none transition-all"
          placeholder="Votre message..."
          required
        ></textarea>
        {state?.errors?.message && <p className="text-red-500 text-xs mt-1">{state.errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
      >
        {isPending ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>

      {state?.message && (
        <p className={`mt-4 text-center text-sm font-medium ${state.success ? 'text-green-600' : 'text-red-600'}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}