import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-16 flex-grow">
      <h1 className="text-4xl font-bold text-blue-600 mb-12 text-center">Nous Contacter</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Section 1: Coordonnées */}
        <div className="lg:col-span-1 space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Coordonnées</h2>
            <ContactInfo />
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Nous trouver</h2>
            <ContactMap />
          </section>
        </div>

        {/* Section 2: Formulaire */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Envoyez-nous un message</h2>
          <p className="text-gray-600 mb-8">
            Vous avez une question sur nos véhicules ou nos services ? Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}