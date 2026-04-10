import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Bienvenue chez BoiteMini</h1>
      <p className="text-xl text-gray-700 mb-8 max-w-2xl">
        Votre nouveau garage automobile de confiance. Le site vitrine est actuellement en cours de construction.
      </p>
      <Link href="/contact" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
        Nous contacter
      </Link>
    </div>
  );
}