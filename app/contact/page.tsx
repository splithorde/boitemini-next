import ContactInfo from '@/components/ContactInfo';

export default function Contact() {
  return (
    <div className="container mx-auto px-6 py-16 flex-grow">
      <h1 className="text-4xl font-bold text-blue-600 mb-12 text-center">Nous Contacter</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center">
          <p className="text-lg text-gray-700">
            Vous souhaitez en savoir plus sur nos services ? N'hésitez pas à nous contacter via les coordonnées ci-dessous.
          </p>
        </div>
        <div className="w-full">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}