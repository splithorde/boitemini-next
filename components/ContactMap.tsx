import React from 'react';

export default function ContactMap() {
  return (
    <div className="w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden relative border border-gray-300">
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-gray-500 font-medium italic">Carte interactive (Nanterre, France)</p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.123456789012!2d2.21!3d48.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66487e070b435%3A0x679632c453676880!2sNanterre!5e0!3m2!1sfr!2sfr!4v1625000000000!5m2!1sfr!2sfr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        title="Localisation Garage"
      ></iframe>
    </div>
  );
}