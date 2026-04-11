import React from 'react';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-blue-900">Nos coordonnées</h2>
      <div className="space-y-4">
        <div>
          <p className="font-semibold text-gray-900">Adresse</p>
          <p className="text-gray-600">123 Avenue de la République, 92000 Nanterre</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Téléphone</p>
          <p className="text-gray-600">01 23 45 67 89</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Email</p>
          <p className="text-gray-600">contact@garage-nanterre.fr</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Horaires</p>
          <p className="text-gray-600">Lundi - Vendredi : 09h00 - 18h00</p>
          <p className="text-gray-600">Samedi : 09h00 - 12h00</p>
        </div>
      </div>
    </div>
  );
}