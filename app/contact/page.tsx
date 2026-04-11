import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-accent mb-12 text-center">Nous Contacter</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-12">
            <div className="prose prose-blue">
              <p className="text-lg text-gray-700">
                Une question sur un véhicule ou besoin d'un rendez-vous ? Notre équipe vous répond dans les plus brefs délais.
              </p>
            </div>
            <ContactInfo />
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Envoyez-nous un message</h2>
            <ContactForm />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Où nous trouver ?</h2>
          <ContactMap />
        </div>
      </div>
    </div>
  );
}