import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-blue-600 mb-12 text-center">Nous Contacter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}