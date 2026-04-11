import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';

export default function Contact() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-800 mb-4">
            Contactez notre garage
          </h1>
          <p className="text-lg text-gray-600">
            Une question ? Un devis ? Notre équipe est à votre écoute pour vous accompagner dans l'entretien de votre véhicule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-12">
            <ContactInfo />
            <ContactMap />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}