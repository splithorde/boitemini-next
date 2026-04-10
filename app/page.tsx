import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-6 md:p-24">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Bienvenue chez <span className="text-blue-600">BoiteMini</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
          Votre garage automobile de confiance. Notre nouveau site vitrine est en cours de création.
        </p>

        <div className="inline-flex flex-col items-center justify-center p-8 bg-white border border-gray-200 rounded-2xl shadow-sm">
          <span className="text-3xl mb-4">🚀</span>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Hello World</h2>
          <p className="text-gray-500">
            La structure de base du site a été initialisée avec succès.
          </p>
        </div>
        
        <div className="pt-8">
          <Link 
            href="#" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}