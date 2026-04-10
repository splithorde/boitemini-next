import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'BoiteMini | Garage Automobile',
  description: 'BoiteMini est votre garage automobile de confiance pour l\'entretien et la réparation de tous vos véhicules.',
  keywords: ['garage', 'automobile', 'réparation', 'entretien', 'BoiteMini', 'voiture'],
  authors: [{ name: 'BoiteMini' }],
  openGraph: {
    title: 'BoiteMini | Garage Automobile',
    description: 'Votre garage automobile de confiance pour l\'entretien et la réparation.',
    url: 'https://boitemini-garage.fr',
    siteName: 'BoiteMini',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BoiteMini | Garage Automobile',
    description: 'Votre garage automobile de confiance pour l\'entretien et la réparation.',
  },
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
        <Header />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}