'use client';

import React, { useActionState, useEffect, useRef } from 'react';
import { submitContactForm } from '@/app/actions/contact';

const initialState = {
  success: false,
  errors: {},
  message: '',
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <form ref={formRef} action={formAction} className="space-y-6 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
          {state?.errors?.name && <p className="text-red-500 text-xs mt-1">{state.errors.name[0]}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
          {state?.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email[0]}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>
        <div>
          <label htmlFor="carBrandModel" className="block text-sm font-medium text-gray-700 mb-1">Marque et modèle</label>
          <input
            type="text"
            id="carBrandModel"
            name="carBrandModel"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fuel" className="block text-sm font-medium text-gray-700 mb-1">Type de carburant</label>
          <select
            id="fuel"
            name="fuel"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition bg-white"
          >
            <option value="">Sélectionner...</option>
            <option value="Essence">Essence</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electrique">Electrique</option>
          </select>
        </div>
        <div>
          <label htmlFor="registrationDate" className="block text-sm font-medium text-gray-700 mb-1">Mise en circulation</label>
          <input
            type="date"
            id="registrationDate"
            name="registrationDate"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition"
        ></textarea>
        {state?.errors?.message && <p className="text-red-500 text-xs mt-1">{state.errors.message[0]}</p>}
      </div>

      {state?.message && (
        <div className={`p-4 rounded-md ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-colors disabled:opacity-50"
      >
        {isPending ? 'Envoi en cours...' : 'Envoyer mon message'}
      </button>
    </form>
  );
}