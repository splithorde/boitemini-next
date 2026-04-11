"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions/contact";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(event.currentTarget);
    const result = await submitContactForm(formData);

    if (result.success) {
      setStatus("success");
      (event.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
          <input name="name" type="text" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input name="email" type="email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 outline-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
          <input name="phone" type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Marque et Modèle</label>
          <input name="brandModel" type="text" placeholder="Ex: Clio IV" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 outline-none" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Type de Carburant</label>
          <select name="fuelType" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 outline-none bg-white">
            <option value="Essence">Essence</option>
            <option value="Diesel">Diesel</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Electrique">Electrique</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date mise en circulation</label>
          <input name="registrationDate" type="date" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 outline-none" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Votre message *</label>
        <textarea name="message" rows={4} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 outline-none"></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brand-600 hover:bg-brand-800 text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-center font-medium">Votre message a été envoyé avec succès !</p>
      )}
      {status === "error" && (
        <p className="text-red-600 text-center font-medium">Une erreur est survenue, veuillez réessayer.</p>
      )}
    </form>
  );
}