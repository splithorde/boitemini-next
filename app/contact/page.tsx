import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';

export default function Contact() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="bg-brand-800 text-white py-20 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl font-extrabold mb-4">Contactez-nous</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto">
            Une question sur une boîte de vitesses ? Besoin d'un devis gratuit ? Notre équipe d'experts est à votre écoute.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 max-w-6xl -mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <ContactInfo />
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-brand-800 mb-4">Notre localisation</h3>
              <ContactMap />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}