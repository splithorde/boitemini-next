"use client";

import { useActionState } from 'react';
import { submitContactForm } from '@/app/actions/contact';

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, null);

  return (
    <form action={formAction} className="space-y-4 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nom *</label>
          <input name="customerName" type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500" />
          {state?.errors?.customerName && <p className="text-red-500 text-xs mt-1">{state.errors.customerName}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email *</label>
          <input name="customerEmail" type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500" />
          {state?.errors?.customerEmail && <p className="text-red-500 text-xs mt-1">{state.errors.customerEmail}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Téléphone</label>
          <input name="customerPhone" type="tel" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Marque & Modèle</label>
          <input name="vehicleBrand" type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Type de carburant</label>
          <select name="fuelType" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500">
            <option value="">Sélectionner...</option>
            <option value="Essence">Essence</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electrique">Electrique</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Date de mise en circulation</label>
          <input name="registrationDate" type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Message *</label>
        <textarea name="message" rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"></textarea>
        {state?.errors?.message && <p className="text-red-500 text-xs mt-1">{state.errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50"
      >
        {isPending ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      {state?.success && (
        <p className="text-green-600 text-center font-medium">{state.message}</p>
      )}
      {state?.success === false && state.message && (
        <p className="text-red-600 text-center font-medium">{state.message}</p>
      )}
    </form>
  );
}