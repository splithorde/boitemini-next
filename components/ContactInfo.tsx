import React from 'react';

const CONTACT_DETAILS = {
  addressLines: ["BoiteMini", "25bis Rue Georges Bizet", "92000 Nanterre"],
  phone: "+33 6 73 12 26 85",
  email: "contact@boitemini.fr",
};

export default function ContactInfo() {
  return (
    <div className="space-y-8 text-gray-700 bg-white p-8 rounded-xl shadow-lg">
      <div>
        <h2 className="font-bold text-xl text-brand-800 mb-4 flex items-center">
          <span className="mr-2 text-accent-500">📍</span> Adresse postale
        </h2>
        <div className="space-y-1">
          {CONTACT_DETAILS.addressLines.map((line, index) => (
            <p key={index} className="text-lg">{line}</p>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="font-bold text-xl text-brand-800 mb-4 flex items-center">
          <span className="mr-2 text-accent-500">📞</span> Téléphone
        </h2>
        <p className="text-lg">{CONTACT_DETAILS.phone}</p>
      </div>
      
      <div>
        <h2 className="font-bold text-xl text-brand-800 mb-4 flex items-center">
          <span className="mr-2 text-accent-500">✉️</span> Email
        </h2>
        <p className="text-lg">{CONTACT_DETAILS.email}</p>
      </div>
    </div>
  );
}
