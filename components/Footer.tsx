import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-2">
        <p>&copy; {new Date().getFullYear()} Garage BoiteMini. Tous droits réservés.</p>
        <div>
          <Link href="/mentions-legales" className="text-sm text-gray-400 hover:text-white transition-colors">
            Mentions Légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
