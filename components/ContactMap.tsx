export default function ContactMap() {
  return (
    <div className="w-full h-80 bg-gray-200 rounded-xl overflow-hidden shadow-inner flex items-center justify-center border border-gray-100">
      <div className="text-center p-6">
        <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <p className="text-gray-600 font-medium">25bis Rue Georges Bizet, 92000 Nanterre</p>
        <p className="text-gray-400 text-sm mt-2">Carte interactive bientôt disponible</p>
      </div>
    </div>
  );
}