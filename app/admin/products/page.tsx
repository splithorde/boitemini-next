"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Plus, Package } from "lucide-react";
import { getProducts } from "@/app/actions/products";
import { getSections } from "@/app/actions/sections";
import ProductTable from "@/components/admin/ProductTable";
import ProductFilters from "@/components/admin/ProductFilters";
import ProductModal from "@/components/admin/ProductModal";
import { Product, Section } from "@prisma/client";

export default function AdminProductsPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<any[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const search = searchParams.get("search") || undefined;
    const section = searchParams.get("section") || undefined;

    const [prods, secs] = await Promise.all([
      getProducts(search, section),
      getSections()
    ]);

    setProducts(prods);
    setSections(secs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
    fetchData();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Package className="w-8 h-8 text-blue-600" />
            Gestion du Catalogue Produits
          </h1>
          <p className="text-gray-500 mt-1">
            Gérez l'inventaire, les tarifs et les catégories de vos pièces détachées.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-200 transition-all active:scale-95"
        >
          <Plus className="w-5 h-5" />
          Nouveau Produit
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
        <ProductFilters sections={sections} />

        {isLoading ? (
          <div className="py-20 text-center">
            <div className="animate-spin inline-block w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mb-4"></div>
            <p className="text-gray-500">Chargement des produits...</p>
          </div>
        ) : (
          <ProductTable products={products} onEdit={handleEdit} />
        )}
      </div>

      <ProductModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        sections={sections}
        initialData={editingProduct}
      />
    </div>
  );
}