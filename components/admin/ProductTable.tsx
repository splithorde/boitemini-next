"use client";

import { Edit2, Trash2, Package } from "lucide-react";
import { deleteProduct } from "@/app/actions/products";
import { Product, Section } from "@prisma/client";

type ProductWithSection = any;

export default function ProductTable({ products, onEdit }: { products: ProductWithSection[], onEdit: (p: any) => void }) {
  const handleDelete = async (id: string) => {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce produit ?")) {
      try {
        await deleteProduct(id);
      } catch (error) {
        alert("Une erreur est survenue lors de la suppression.");
      }
    }
  };

  if (products.length === 0) {
    return (
      <div className="text-center py-20 bg-gray-50/50 rounded-2xl border-2 border-dashed border-gray-100">
        <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900">Aucun produit trouvé</h3>
        <p className="text-gray-500">Le catalogue est vide ou aucun résultat ne correspond à votre recherche.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="px-6 py-4 font-semibold text-gray-700 text-sm uppercase tracking-wider">Produit</th>
            <th className="px-6 py-4 font-semibold text-gray-700 text-sm uppercase tracking-wider">Section</th>
            <th className="px-6 py-4 font-semibold text-gray-700 text-sm uppercase tracking-wider text-right">Stock</th>
            <th className="px-6 py-4 font-semibold text-gray-700 text-sm uppercase tracking-wider text-right">Prix Vente (HT)</th>
            <th className="px-6 py-4 font-semibold text-gray-700 text-sm uppercase tracking-wider text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {products.map((product: any) => (
            <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-12 h-12 rounded-lg object-cover bg-gray-100 border border-gray-200"
                  />
                  <div>
                    <div className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{product.name}</div>
                    <div className="text-xs text-gray-500 line-clamp-1 max-w-[250px]">{product.description}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                  {product.section.name}
                </span>
              </td>
              <td className="px-6 py-4 text-right font-mono text-gray-600">
                <span className={product.stockQuantity < 5 ? "text-red-600 font-bold" : ""}>
                  {product.stockQuantity}
                </span>
              </td>
              <td className="px-6 py-4 text-right font-semibold text-gray-900">{Number(product.sellingPrice).toFixed(2)} €</td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <button 
                    onClick={() => onEdit(product)} 
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(product.id)}
                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}