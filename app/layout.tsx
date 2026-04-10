import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BoiteMini | Garage Automobile',
  description: 'Services d\'entretien et réparation automobile.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}