import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow p-8 text-center">
      <h1 className="text-6xl font-extrabold text-blue-600 mb-6">Hello World</h1>
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">Bienvenue chez BoiteMini</h2>
      <p className="text-xl mb-10 max-w-2xl text-gray-600">
        Votre garage automobile de confiance. Ce site vitrine est actuellement en cours de construction pour mieux vous servir.
      </p>
      <Link 
        href="/contact" 
        className="bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-lg"
      >
        Nous contacter
      </Link>
    </div>
  );
}
