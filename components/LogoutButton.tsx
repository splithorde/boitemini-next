'use client';

import { logoutAction } from '@/app/actions/auth';

export default function LogoutButton() {
  return (
    <button
      onClick={() => logoutAction()}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
    >
      Déconnexion
    </button>
  );
}