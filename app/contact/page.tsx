import ContactInfo from '@/components/ContactInfo';

export default function Contact() {
  return (
    <div className="p-8 container mx-auto flex flex-col items-center flex-grow py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Nous Contacter</h1>
      <div className="mb-12">
        <p className="text-lg text-gray-700 max-w-2xl">
          Vous souhaitez en savoir plus sur nos services ? N'hésitez pas à nous contacter via les coordonnées ci-dessous.
        </p>
      </div>
      <div className="w-full max-w-md">
        <ContactInfo />
      </div>
    </div>
  );
}