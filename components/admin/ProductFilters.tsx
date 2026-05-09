"use client";

import { Search, Filter } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Section } from "@prisma/client";
import { useTransition, useEffect, useState } from "react";

export default function ProductFilters({ sections }: { sections: Section[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const timer = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (search) params.set("search", search);
      else params.delete("search");
      
      startTransition(() => {
        router.push(`?${params.toString()}`);
      });
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  const handleSectionChange = (id: string) => {
    const params = new URLSearchParams(searchParams);
    if (id && id !== "all") params.set("section", id);
    else params.delete("section");
    
    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        />
      </div>
      <div className="relative min-w-[240px]">
        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
        <select
          value={searchParams.get("section") || "all"}
          onChange={(e) => handleSectionChange(e.target.value)}
          className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none appearance-none bg-white transition-all cursor-pointer"
        >
          <option value="all">Toutes les sections</option>
          {sections.map((s) => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {isPending && (
        <div className="flex items-center text-sm text-gray-400 animate-pulse">
          Mise à jour...
        </div>
      )}
    </div>
  );
}