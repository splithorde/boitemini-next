import { getProducts } from "@/app/actions/products";
import ProductTable from "@/components/admin/ProductTable";
import ProductFilters from "@/components/admin/ProductFilters";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function AdminProductsPage({
  searchParams,
}: {
  searchParams: { q?: string; section?: string };
}) {
  const search = searchParams.q;
  const sectionId = searchParams.section;

  const [products, sections] = await Promise.all([
    getProducts(search, sectionId),
    prisma.section.findMany({ orderBy: { name: 'asc' } })
  ]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestion du Catalogue</h1>
          <p className="text-gray-600">Gérez l'inventaire des produits et les tarifs.</p>
        </div>
        <Link
          href="/admin/products/new"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Ajouter un produit
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200 bg-gray-50">
          <ProductFilters sections={sections} />
        </div>
        <ProductTable products={products} />
      </div>
    </div>
  );
}