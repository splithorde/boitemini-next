"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Search, Filter } from "lucide-react";
import { Section } from "@prisma/client";

export default function ProductFilters({ sections }: { sections: Section[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) params.set("search", term); else params.delete("search");
    router.push(`/admin/products?${params.toString()}`);
  };

  const handleSectionFilter = (sectionId: string) => {
    const params = new URLSearchParams(searchParams);
    if (sectionId && sectionId !== "all") params.set("section", sectionId); else params.delete("section");
    router.push(`/admin/products?${params.toString()}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Rechercher un produit..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("search") || ""}
        />
      </div>
      <div className="relative">
        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <select
          className="pl-10 pr-8 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none appearance-none bg-white"
          onChange={(e) => handleSectionFilter(e.target.value)}
          defaultValue={searchParams.get("section") || "all"}
        >
          <option value="all">Toutes les sections</option>
          {sections.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}