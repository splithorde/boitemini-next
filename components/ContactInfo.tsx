import React from 'react';

const CONTACT_DETAILS = {
  addressLines: ["BoiteMini", "25bis Rue Georges Bizet", "92000 Nanterre"],
  phone: "+33 6 73 12 26 85",
  email: "contact@boitemini.fr",
};

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col">
        <h2 className="font-bold text-xl text-brand-800 mb-3 uppercase tracking-wider text-sm">Adresse postale</h2>
        <div className="text-gray-600 space-y-1">
          {CONTACT_DETAILS.addressLines.map((line, index) => (
            <p key={index} className="block">{line}</p>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col">
        <h2 className="font-bold text-xl text-brand-800 mb-3 uppercase tracking-wider text-sm">Téléphone</h2>
        <p className="text-brand-600 font-semibold text-lg">{CONTACT_DETAILS.phone}</p>
      </div>

      <div className="flex flex-col">
        <h2 className="font-bold text-xl text-brand-800 mb-3 uppercase tracking-wider text-sm">Email</h2>
        <a 
          href={`mailto:${CONTACT_DETAILS.email}`} 
          className="text-brand-600 hover:underline font-semibold"
        >
          {CONTACT_DETAILS.email}
        </a>
      </div>
    </div>
  );
}