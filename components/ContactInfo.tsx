import { Phone, Mail, Clock, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-bold text-brand-800 mb-6">Nos coordonnées</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-4">
            <div className="mt-1 bg-brand-100 p-2 rounded-lg text-brand-600">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Adresse</p>
              <p className="text-gray-600">25bis Rue Georges Bizet, 92000 Nanterre</p>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="mt-1 bg-brand-100 p-2 rounded-lg text-brand-600">
              <Phone size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Téléphone</p>
              <a href="tel:0147242111" className="text-gray-600 hover:text-brand-600 transition-colors">01 47 24 21 11</a>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <div className="mt-1 bg-brand-100 p-2 rounded-lg text-brand-600">
              <Mail size={20} />
            </div>
            <div>
              <p className="font-semibold text-gray-900">Email</p>
              <a href="mailto:contact@boitemini.fr" className="text-gray-600 hover:text-brand-600 transition-colors">contact@boitemini.fr</a>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-bold text-brand-800 mb-6">Horaires d'ouverture</h3>
        <div className="flex items-start gap-4">
          <div className="mt-1 bg-brand-100 p-2 rounded-lg text-brand-600">
            <Clock size={20} />
          </div>
          <div className="grid grid-cols-2 gap-x-4 text-gray-600">
            <p>Lundi - Vendredi</p>
            <p className="font-medium text-gray-900">09:00 - 18:30</p>
            <p>Samedi</p>
            <p className="font-medium text-gray-900">09:00 - 12:30</p>
            <p>Dimanche</p>
            <p className="font-medium text-gray-900">Fermé</p>
          </div>
        </div>
      </div>
    </div>
  );
}