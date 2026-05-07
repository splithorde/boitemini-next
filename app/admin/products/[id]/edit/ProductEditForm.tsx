"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { upsertProduct } from "@/app/actions/products";
import { productSchema } from "@/lib/zod-schemas";
import { Section } from "@prisma/client";

interface ProductEditFormProps {
  product: any;
  sections: Section[];
}

export default function ProductEditForm({ product, sections }: ProductEditFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError(null);

    const data = {
      id: product.id,
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      imageUrl: formData.get("imageUrl") as string,
      stockQuantity: Number(formData.get("stockQuantity")),
      costPrice: Number(formData.get("costPrice")),
      sellingPrice: Number(formData.get("sellingPrice")),
      sectionId: formData.get("sectionId") as string,
    };

    try {
      const validated = productSchema.parse(data);
      await upsertProduct({ ...validated, id: product.id });
      router.push("/admin/products");
      router.refresh();
    } catch (e: any) {
      if (e.errors) {
        setError(e.errors[0].message);
      } else {
        setError("Une erreur est survenue lors de la modification.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm border border-red-200">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-1">Nom du produit</label>
        <input name="name" defaultValue={product.name} required className="w-full border p-2 rounded" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea name="description" defaultValue={product.description} required className="w-full border p-2 rounded h-24" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">URL de l'image</label>
        <input name="imageUrl" defaultValue={product.imageUrl} required className="w-full border p-2 rounded" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Prix d'achat (€)</label>
          <input name="costPrice" type="number" step="0.01" defaultValue={product.costPrice} required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Prix de vente (€)</label>
          <input name="sellingPrice" type="number" step="0.01" defaultValue={product.sellingPrice} required className="w-full border p-2 rounded" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Stock</label>
          <input name="stockQuantity" type="number" defaultValue={product.stockQuantity} required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Section</label>
          <select name="sectionId" defaultValue={product.sectionId} className="w-full border p-2 rounded">
            {sections.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-6">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Enregistrement..." : "Sauvegarder les modifications"}
        </button>
      </div>
    </form>
  );
}