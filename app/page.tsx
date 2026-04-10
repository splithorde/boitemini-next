export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">BoiteMini</h2>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-5xl font-extrabold text-blue-700">Bienvenue chez BoiteMini</h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl">
          Votre nouveau garage de confiance arrive bientôt. Nous préparons un espace dédié à l'entretien de votre véhicule.
        </p>
      </main>

      <footer className="p-6 text-center text-sm text-gray-500 border-t border-gray-200">
        © {new Date().getFullYear()} BoiteMini - Tous droits réservés.
      </footer>
    </div>
  );
}