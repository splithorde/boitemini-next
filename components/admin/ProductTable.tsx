"use client";

import { Product, Section } from "@prisma/client";
import { Edit2, Trash2, Box } from "lucide-react";
import { deleteProduct } from "@/app/actions/products";

interface ProductWithSection extends Product {
  section: Section;
}

export default function ProductTable({ 
  products, 
  onEdit 
}: { 
  products: ProductWithSection[], 
  onEdit: (p: ProductWithSection) => void 
}) {

  const handleDelete = async (id: string) => {
    if (confirm("Voulez-vous vraiment supprimer ce produit ?")) {
      await deleteProduct(id);
    }
  };

  return (
    <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase font-semibold text-gray-600">
            <th className="px-6 py-4">Produit</th>
            <th className="px-6 py-4">Section</th>
            <th className="px-6 py-4">Stock</th>
            <th className="px-6 py-4">Prix Achat (HT)</th>
            <th className="px-6 py-4">Prix Vente (HT)</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} className="w-10 h-10 object-cover rounded shadow-sm" />
                  ) : (
                    <div className="w-10 h-10 bg-gray-100 flex items-center justify-center rounded">
                      <Box className="text-gray-400 w-5 h-5" />
                    </div>
                  )}
                  <div>
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-xs text-gray-500 truncate max-w-[200px]">{product.description}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-medium">
                  {product.section.name}
                </span>
              </td>
              <td className="px-6 py-4 text-sm">
                <span className={`font-semibold ${product.stockQuantity <= 5 ? 'text-red-600' : 'text-gray-700'}`}>
                  {product.stockQuantity} pces
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {Number(product.costPrice).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
              </td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">
                {Number(product.sellingPrice).toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
              </td>
              <td className="px-6 py-4 text-right space-x-2">
                <button 
                  onClick={() => onEdit(product)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDelete(product.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan={6} className="px-6 py-12 text-center text-gray-500 italic">
                Aucun produit trouvé dans le catalogue.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}