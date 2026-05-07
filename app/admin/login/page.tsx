import { Metadata } from "next";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Connexion Admin | BoiteMini",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md border border-gray-200">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            BoiteMini Admin
          </h1>
          <p className="text-sm text-gray-500 mt-2">
            Veuillez vous connecter pour accéder à l'interface de gestion.
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}