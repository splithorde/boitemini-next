import ContactInfo from '@/components/ContactInfo';
import ContactForm from '@/components/ContactForm';
import ContactMap from '@/components/ContactMap';

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Contact</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <ContactInfo />
          <ContactMap />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}