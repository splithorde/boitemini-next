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
        <div className="bg-white overflow-hidden shadow-sm rounded-lg">
          <div className="p-6 text-gray-900">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Hello World</h2>
            <p className="text-gray-600">
              Bienvenue dans l'interface d'administration de BoiteMini.
              Cet espace vous permettra prochainement de gérer votre catalogue de produits et les stocks.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}