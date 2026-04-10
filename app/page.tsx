export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight">
        Bienvenue chez BoiteMini
      </h1>
      <p className="mt-6 text-xl text-gray-600 max-w-2xl">
        Notre nouveau site vitrine est en cours de déploiement. Nous avons hâte de vous retrouver pour l'entretien de votre véhicule.
      </p>
      <div className="mt-10 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md">
        À très bientôt dans notre garage !
      </div>
    </main>
  );
}