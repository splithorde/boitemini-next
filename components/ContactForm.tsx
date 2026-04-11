"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contact";

const initialState = {
  success: false,
  message: "",
  errors: {},
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  return (
    <form action={formAction} className="space-y-6 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Nom complet *</label>
          <input
            name="name"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none"
            placeholder="Jean Dupont"
          />
          {state?.errors?.name && <p className="text-red-500 text-xs">{state.errors.name}</p>}
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Email *</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-all outline-none"
            placeholder="jean.dupont@exemple.com"
          />
          {state?.errors?.email && <p className="text-red-500 text-xs">{state.errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Téléphone</label>
          <input
            name="phone"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 transition-all outline-none"
            placeholder="06 00 00 00 00"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Marque et modèle</label>
          <input
            name="brandModel"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 transition-all outline-none"
            placeholder="Peugeot 208"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Type de carburant</label>
          <select
            name="fuelType"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 transition-all outline-none bg-white"
          >
            <option value="">Sélectionnez...</option>
            <option value="Essence">Essence</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electrique">Electrique</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Mise en circulation</label>
          <input
            type="date"
            name="registrationDate"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 transition-all outline-none"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Message *</label>
        <textarea
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-500 transition-all outline-none resize-none"
          placeholder="Comment pouvons-nous vous aider ?"
        ></textarea>
        {state?.errors?.message && <p className="text-red-500 text-xs">{state.errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg disabled:opacity-50"
      >
        {isPending ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      {state?.message && (
        <div className={`p-4 rounded-lg text-center font-medium ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {state.message}
        </div>
      )}
    </form>
  );
}