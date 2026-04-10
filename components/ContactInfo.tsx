import React from 'react';

const CONTACT_DETAILS = {
  address: "BoiteMini 25bis Rue Georges Bizet 92000 Nanterre",
  phone: "+33 6 73 12 26 85",
  email: "contact@boitemini.fr",
};

export default function ContactInfo() {
  return (
    <div className="space-y-4 text-gray-700">
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-lg text-blue-800">Adresse postale</h2>
        <p>{CONTACT_DETAILS.address}</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-lg text-blue-800">Téléphone</h2>
        <p>{CONTACT_DETAILS.phone}</p>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-lg text-blue-800">Email</h2>
        <span>{CONTACT_DETAILS.email}</span>
      </div>
    </div>
  );
}