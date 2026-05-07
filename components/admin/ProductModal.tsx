"use client";

import { useState, useEffect } from "react";
import { Section, Product } from "@prisma/client";
import { productSchema } from "@lib/zod-schemas";
import { upsertProduct } from "@/app/actions/products";
import { X } from "lucide-react";

export default function ProductModal({
  isOpen,
  onClose,
  sections,
  initialData
}: {
  isOpen: boolean;
  onClose: () => void;
  sections: Section[];
  initialData?: Product | null;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      id: initialData?.id,
      name: formData.get("name") as string,
      stockQuantity: Number(formData.get("stockQuantity")),
      costPrice: Number(formData.get("costPrice")),
      sellingPrice: Number(formData.get("sellingPrice")),
      imageUrl: formData.get("imageUrl") as string,
      description: formData.get("description") as string,
      sectionId: formData.get("sectionId") as string,
    };

    try {
      const validated = productSchema.parse(data);
      await upsertProduct({ ...validated, id: initialData?.id });
      onClose();
    } catch (err: any) {
      setError(err.errors?.[0]?.message || "Une erreur est survenue lors de la validation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-bold text-gray-900">
            {initialData ? "Modifier le produit" : "Ajouter un nouveau produit"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="bg-red-50 text-red-700 p-3 rounded-lg text-sm font-medium border border-red-100">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Nom du produit</label>
              <input name="name" defaultValue={initialData?.name} className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all" required />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Section</label>
              <select name="sectionId" defaultValue={initialData?.sectionId} className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all" required>
                <option value="">Choisir une section</option>
                {sections.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Stock (unité)</label>
              <input name="stockQuantity" type="number" min="0" defaultValue={initialData?.stockQuantity} className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all" required />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">URL de la photo</label>
              <input name="imageUrl" type="url" defaultValue={initialData?.imageUrl} className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all" required />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Prix Achat HT (€)</label>
              <input name="costPrice" type="number" step="0.01" min="0" defaultValue={initialData ? Number(initialData.costPrice) : ""} className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all" required />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Prix Vente HT (€)</label>
              <input name="sellingPrice" type="number" step="0.01" min="0" defaultValue={initialData ? Number(initialData.sellingPrice) : ""} className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all" required />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea name="description" rows={3} defaultValue={initialData?.description} className="w-full p-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 transition-all" required></textarea>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-all">
              Annuler
            </button>
            <button 
              type="submit" 
              disabled={loading}
              className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium shadow-md transition-all disabled:opacity-50"
            >
              {loading ? "Enregistrement..." : "Enregistrer"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}