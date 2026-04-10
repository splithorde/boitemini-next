import React from 'react';

const CONTACT_DETAILS = {
  addressLines: ["BoiteMini", "25bis Rue Georges Bizet", "92000 Nanterre"],
  phone: "+33 6 73 12 26 85",
  email: "contact@boitemini.fr",
};

export default function ContactInfo() {
  return (
    <div className="space-y-8 text-gray-700">
      <div className="flex flex-col">
        <h2 className="font-bold text-lg text-blue-800 mb-2">Adresse postale</h2>
        {CONTACT_DETAILS.addressLines.map((line, index) => (
          <p key={index} className="block">{line}</p>
        ))}
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-lg text-blue-800 mb-2">Téléphone</h2>
        <p>{CONTACT_DETAILS.phone}</p>
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-lg text-blue-800 mb-2">Email</h2>
        <span className="block">{CONTACT_DETAILS.email}</span>
      </div>
    </div>
  );
}