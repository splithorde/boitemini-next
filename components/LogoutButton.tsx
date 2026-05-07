"use client";

import { logoutAction } from "@/app/actions/auth";

export default function LogoutButton() {
  return (
    <button
      onClick={() => logoutAction()}
      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors text-sm"
    >
      Déconnexion
    </button>
  );
}