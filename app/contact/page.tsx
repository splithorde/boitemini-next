import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-800 mb-4">Contactez-nous</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une question sur une réparation ? Un devis pour votre véhicule ? Notre équipe est à votre écoute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <ContactInfo />
            <ContactMap />
          </div>
          
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}