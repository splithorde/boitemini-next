export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-blue-700 tracking-tight">
          BoiteMini
        </h1>
        <p className="text-2xl text-gray-600">
          Experts en entretien automobile.
        </p>
        <div className="mt-8 p-4 bg-white shadow rounded-lg border border-gray-200">
          <p className="text-lg text-gray-500 font-medium">
            Le site officiel est en cours de déploiement.
          </p>
        </div>
      </div>
    </main>
  );
}