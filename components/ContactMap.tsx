import React from 'react';

export default function ContactMap() {
  return (
    <div className="w-full h-80 rounded-lg overflow-hidden shadow-md bg-gray-200 flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-gray-600 font-medium mb-2">Localisation</p>
        <p className="text-gray-500 text-sm">25bis Rue Georges Bizet, 92000 Nanterre</p>
        <div className="mt-4 text-blue-600">
          <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
      </div>
    </div>
  );
}