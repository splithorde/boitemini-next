import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-12 flex-grow">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-brand-800 mb-4">Contactez-nous</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Notre équipe est à votre écoute pour toute question concernant l'entretien de votre véhicule ou pour prendre rendez-vous.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
            <ContactForm />
          </section>
        </div>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nos coordonnées</h2>
            <ContactInfo />
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Nous trouver</h2>
            <ContactMap />
          </section>
        </div>
      </div>
    </div>
  );
}