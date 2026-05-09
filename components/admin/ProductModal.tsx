"use client";

import { X } from "lucide-react";
import ProductForm from "./ProductForm";
import { Product, Section } from "@prisma/client";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  sections: Section[];
  initialData?: any | null;
}

export default function ProductModal({ isOpen, onClose, sections, initialData }: ProductModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh]">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-bold">
            {initialData ? "Modifier le produit" : "Ajouter un nouveau produit"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-y-auto p-6">
          <ProductForm 
            sections={sections} 
            initialData={initialData} 
            onSuccess={onClose}
          />
        </div>
      </div>
    </div>
  );
}