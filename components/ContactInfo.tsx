export default function ContactInfo() {
  return (
    <div className="space-y-10">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Nos Coordonnées</h3>
        <ul className="space-y-6">
          <li className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-50 flex items-center justify-center rounded-lg">
              <span className="text-blue-600">📍</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 uppercase">Adresse</p>
              <p className="text-base text-gray-900 font-medium">25bis Rue Georges Bizet, 92000 Nanterre</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-50 flex items-center justify-center rounded-lg">
              <span className="text-blue-600">📞</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 uppercase">Téléphone</p>
              <p className="text-base text-gray-900 font-medium">01 47 24 10 10</p>
            </div>
          </li>
          <li className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-blue-50 flex items-center justify-center rounded-lg">
              <span className="text-blue-600">✉️</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 uppercase">Email</p>
              <p className="text-base text-gray-900 font-medium">contact@boitemini.fr</p>
            </div>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Horaires d'ouverture</h3>
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Lundi - Vendredi</span>
            <span className="font-semibold text-gray-900">09:00 - 18:30</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Samedi</span>
            <span className="font-semibold text-gray-900">10:00 - 17:00</span>
          </div>
        </div>
      </div>
    </div>
  );
}