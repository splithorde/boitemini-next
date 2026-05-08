"use client";

import { LogOut } from "lucide-react";
import { logoutAction } from "@/app/actions/auth";
import { useState } from "react";

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logoutAction();
    } catch (error) {
      console.error("Logout failed", error);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-red-600 hover:border-red-200 transition-all shadow-sm disabled:opacity-50"
    >
      <LogOut className={`w-4 h-4 ${isLoading ? 'animate-pulse' : ''}`} />
      {isLoading ? "Déconnexion..." : "Déconnexion"}
    </button>
  );
}
