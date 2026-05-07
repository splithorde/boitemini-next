"use client";

import { useState, useEffect } from "react";
import { X, Plus, Check, Loader2 } from "lucide-react";
import { upsertProduct } from "@/app/actions/products";
import { createSection } from "@/app/actions/sections";
import { Section, Product } from "@prisma/client";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  sections: Section[];
  initialData: Product | null;
}

export default function ProductModal({ isOpen, onClose, sections, initialData }: ProductModalProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAddingSection, setIsAddingSection] = useState(false);
  const [newSectionName, setNewSectionName] = useState("");
  const [availableSections, setAvailableSections] = useState<Section[]>(sections);

  useEffect(() => {
    setAvailableSections(sections);
  }, [sections]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      stockQuantity: formData.get("stockQuantity"),
      costPrice: formData.get("costPrice"),
      sellingPrice: formData.get("sellingPrice"),
      imageUrl: formData.get("imageUrl"),
      description: formData.get("description"),
      sectionId: formData.get("sectionId"),
    };

    try {
      await upsertProduct(data, initialData?.id);
      onClose();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddSection = async () => {
    if (!newSectionName.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const section = await createSection({ name: newSectionName });
      setAvailableSections(prev => [...prev, section].sort((a, b) => a.name.localeCompare(b.name)));
      setNewSectionName("");
      setIsAddingSection(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
          <h2 className="text-xl font-bold text-gray-900">
            {initialData ? "Modifier le produit" : "Ajouter un produit"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Nom du produit</label>
              <input
                name="name"
                defaultValue={initialData?.name}
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Section / Catégorie</label>
              <div className="flex gap-2">
                {!isAddingSection ? (
                  <>
                    <select
                      name="sectionId"
                      defaultValue={initialData?.sectionId}
                      required
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    >
                      <option value="">Choisir une section</option>
                      {availableSections.map((s) => (
                        <option key={s.id} value={s.id}>{s.name}</option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => setIsAddingSection(true)}
                      className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                      title="Ajouter une nouvelle section"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      value={newSectionName}
                      onChange={(e) => setNewSectionName(e.target.value)}
                      placeholder="Nouvelle section..."
                      className="flex-1 px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                      autoFocus
                    />
                    <button
                      type="button"
                      onClick={handleAddSection}
                      disabled={loading || !newSectionName.trim()}
                      className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors disabled:opacity-50"
                    >
                      <Check className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsAddingSection(false)}
                      className="p-2 bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Stock</label>
              <input
                name="stockQuantity"
                type="number"
                defaultValue={initialData?.stockQuantity}
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Prix Achat (€)</label>
              <input
                name="costPrice"
                type="number"
                step="0.01"
                defaultValue={initialData?.costPrice?.toString()}
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Prix Vente (€)</label>
              <input
                name="sellingPrice"
                type="number"
                step="0.01"
                defaultValue={initialData?.sellingPrice?.toString()}
                required
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">URL de l'image</label>
            <input
              name="imageUrl"
              type="url"
              defaultValue={initialData?.imageUrl}
              required
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              defaultValue={initialData?.description}
              required
              rows={3}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {initialData ? "Enregistrer" : "Créer le produit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}