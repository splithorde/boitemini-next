import { Package, Users, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";

export default function AdminDashboard() {
  const stats = [
    {
      name: "Produits en catalogue",
      value: "Gérer le stock",
      icon: Package,
      href: "/admin/products",
      color: "bg-blue-500",
    },
    {
      name: "Demandes de contact",
      value: "Voir les messages",
      icon: MessageSquare,
      href: "#", // Placeholder for future feature
      color: "bg-green-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-8 py-4 flex justify-between items-center shadow-sm sticky top-0 z-10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          BoiteMini Admin
        </h1>
        <LogoutButton />
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Tableau de bord
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Bienvenue sur votre interface de gestion. Sélectionnez une section pour commencer.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className={`${item.color} p-4 rounded-xl text-white shadow-lg`}>
                  <item.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{item.name}</p>
                  <p className="text-xl font-bold text-gray-900 flex items-center gap-1 group-hover:text-blue-600 transition-colors">
                    {item.value}
                    <ArrowRight className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all" />
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}