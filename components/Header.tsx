import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          BoiteMini
        </Link>
        <nav className="flex space-x-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            Accueil
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-blue-600">
            Services
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}