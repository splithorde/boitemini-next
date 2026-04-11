import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-4">
        <MapPin className="w-6 h-6 text-brand-600 mt-1" />
        <div>
          <h3 className="font-semibold text-gray-900">Adresse</h3>
          <p className="text-gray-600">25bis Rue Georges Bizet, 92000 Nanterre</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Phone className="w-6 h-6 text-brand-600 mt-1" />
        <div>
          <h3 className="font-semibold text-gray-900">Téléphone</h3>
          <p className="text-gray-600">01 47 24 60 48</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Mail className="w-6 h-6 text-brand-600 mt-1" />
        <div>
          <h3 className="font-semibold text-gray-900">Email</h3>
          <p className="text-gray-600">contact@boitemini.fr</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <Clock className="w-6 h-6 text-brand-600 mt-1" />
        <div>
          <h3 className="font-semibold text-gray-900">Horaires</h3>
          <p className="text-gray-600">Lundi - Vendredi: 9h00 - 18h00</p>
          <p className="text-gray-600">Samedi: Sur rendez-vous</p>
        </div>
      </div>
    </div>
  );
}