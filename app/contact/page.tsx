import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Nous Contacter</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactForm />
        <div className="space-y-12">
           <ContactInfo />
           <ContactMap />
        </div>
      </div>
    </div>
  );
}