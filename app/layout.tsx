import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BoiteMini | Garage Automobile de confiance',
  description: 'Services professionnels d\'entretien, réparation et diagnostic automobile chez BoiteMini. Prenez rendez-vous dès aujourd\'hui.',
  keywords: ['garage', 'automobile', 'réparation', 'entretien', 'BoiteMini'],
  openGraph: {
    title: 'BoiteMini | Garage Automobile',
    description: 'Expertise automobile et entretien mécanique.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}