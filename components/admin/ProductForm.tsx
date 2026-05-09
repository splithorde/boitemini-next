"use client";

import { useState } from "react";
import { upsertProduct } from "@/app/actions/products";
import { Section } from "@prisma/client";

export default function ProductForm({ sections, initialData, onSuccess }: { 
  sections: Section[], 
  initialData?: any, 
  onSuccess: () => void 
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await upsertProduct(data, initialData?.id);
      onSuccess();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm">{error}</div>}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium">Nom du produit</label>
          <input name="name" defaultValue={initialData?.name} required className="w-full p-2 border rounded-lg" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Section</label>
          <select name="sectionId" defaultValue={initialData?.sectionId} required className="w-full p-2 border rounded-lg">
            <option value="">Choisir une section</option>
            {sections.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-1">
          <label className="text-sm font-medium">Stock</label>
          <input name="stockQuantity" type="number" defaultValue={initialData?.stockQuantity || 0} required className="w-full p-2 border rounded-lg" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Prix Achat HT (€)</label>
          <input name="costPrice" type="number" step="0.01" defaultValue={initialData?.costPrice || 0} required className="w-full p-2 border rounded-lg" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium">Prix Vente HT (€)</label>
          <input name="sellingPrice" type="number" step="0.01" defaultValue={initialData?.sellingPrice || 0} required className="w-full p-2 border rounded-lg" />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">URL de l'image</label>
        <input name="imageUrl" type="url" defaultValue={initialData?.imageUrl} required className="w-full p-2 border rounded-lg" placeholder="https://..." />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-medium">Description</label>
        <textarea name="description" defaultValue={initialData?.description} required className="w-full p-2 border rounded-lg h-24" />
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <button 
          type="submit" 
          disabled={loading}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Enregistrement..." : "Enregistrer"}
        </button>
      </div>
    </form>
  );
}