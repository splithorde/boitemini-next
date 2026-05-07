"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { productSchema } from "@/lib/zod-schemas";
import { upsertProduct } from "@/app/actions/products";
import { Section } from "@prisma/client";

interface ProductFormProps {
  sections: Section[];
  initialData?: any;
}

type ProductFormValues = z.infer<typeof productSchema>;

export default function ProductForm({ sections, initialData }: ProductFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: initialData || {
      stockQuantity: 0,
      costPrice: 0,
      sellingPrice: 0,
    },
  });

  const onSubmit = async (data: ProductFormValues) => {
    setLoading(true);
    setError(null);
    try {
      await upsertProduct({ ...data, id: initialData?.id });
      router.push("/admin/products");
      router.refresh();
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue lors de l'enregistrement.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl bg-white p-6 rounded-lg shadow-sm">
      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700">Nom du produit</label>
        <input
          {...register("name")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Stock</label>
          <input
            type="number"
            {...register("stockQuantity")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          {errors.stockQuantity && <p className="mt-1 text-xs text-red-500">{errors.stockQuantity.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Prix d'achat (€)</label>
          <input
            type="number"
            step="0.01"
            {...register("costPrice")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          {errors.costPrice && <p className="mt-1 text-xs text-red-500">{errors.costPrice.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Prix de vente (€)</label>
          <input
            type="number"
            step="0.01"
            {...register("sellingPrice")}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
          {errors.sellingPrice && <p className="mt-1 text-xs text-red-500">{errors.sellingPrice.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Section / Catégorie</label>
        <select
          {...register("sectionId")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          <option value="">Sélectionner une section</option>
          {sections.map((section) => (
            <option key={section.id} value={section.id}>
              {section.name}
            </option>
          ))}
        </select>
        {errors.sectionId && <p className="mt-1 text-xs text-red-500">{errors.sectionId.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">URL de l'image</label>
        <input
          {...register("imageUrl")}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          placeholder="https://example.com/image.jpg"
        />
        {errors.imageUrl && <p className="mt-1 text-xs text-red-500">{errors.imageUrl.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          {...register("description")}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
        {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>}
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={() => router.back()}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? "Enregistrement..." : "Ajouter le produit"}
        </button>
      </div>
    </form>
  );
}