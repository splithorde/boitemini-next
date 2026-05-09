import Link from "next/link";
import { Package, Users, Settings, ClipboardList } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Catalogue", href: "/admin/products", icon: Package, description: "Gérer les produits et le stock" },
    { label: "Demandes Contact", href: "/admin/contacts", icon: ClipboardList, description: "Voir les messages clients" },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Tableau de Bord</h1>
        <p className="mt-2 text-lg text-gray-600">Bienvenue dans l'interface de gestion BoiteMini.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Link
            key={stat.href}
            href={stat.href}
            className="group relative bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{stat.label}</h3>
                <p className="text-sm text-gray-500">{stat.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}