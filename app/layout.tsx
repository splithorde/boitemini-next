import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BoiteMini | Garage Automobile',
  description: 'Services d\'entretien et réparation automobile de confiance.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}