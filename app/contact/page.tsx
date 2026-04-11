import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Contactez-nous</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une question sur un véhicule ou besoin d'un devis ? Notre équipe est à votre écoute pour vous accompagner.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <ContactInfo />
            </div>
            <ContactMap />
          </div>

          <div className="lg:sticky lg:top-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}