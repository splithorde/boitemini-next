import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BoiteMini | Garage Automobile',
  description: 'Site vitrine du garage BoiteMini pour tous vos services d\'entretien et réparation automobile.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
        <header className="bg-white shadow-sm border-b">
          <nav className="container mx-auto px-6 py-4 flex items-center justify-between" aria-label="Menu principal">
            <span className="text-2xl font-extrabold text-blue-600">BoiteMini</span>
          </nav>
        </header>

        <main className="flex-1 flex flex-col container mx-auto px-6 py-8">
          {children}
        </main>

        <footer className="bg-gray-900 text-gray-300 py-6 mt-auto">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} BoiteMini. Tous droits réservés.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
