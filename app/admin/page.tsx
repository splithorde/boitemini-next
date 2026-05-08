import LogoutButton from "@/components/LogoutButton";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
          <LogoutButton />
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
          <div className="p-8 text-center">
            <h2 className="text-4xl font-extrabold text-blue-600 mb-4">Hello World</h2>
            <p className="text-lg text-gray-600">
              Bienvenue dans l'interface d'administration de BoiteMini.
            </p>
            <p className="mt-4 text-sm text-gray-400 italic">
              Vous êtes connecté en tant qu'administrateur.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
