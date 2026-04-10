import Map from '@/components/Map';

export default function Contact() {
  return (
    <div className="p-8 container mx-auto flex flex-col items-center flex-grow py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Nous Contacter</h1>
      <p className="text-lg text-gray-700 mb-8">
        25bis Rue Georges Bizet 92000 Nanterre
      </p>
      <div className="w-full max-w-4xl">
        <Map address="25bis Rue Georges Bizet 92000 Nanterre" />
      </div>
    </div>
  );
}