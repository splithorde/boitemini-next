import './globals.css';
import type { Metadata } from 'next';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'BoiteMini | Garage Automobile',
  description: 'Services d\'entretien et réparation automobile.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
