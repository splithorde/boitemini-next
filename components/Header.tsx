import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          BoiteMini
        </Link>
        <nav className="space-x-6">
          <Link href="/services" className="hover:text-blue-200 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="hover:text-blue-200 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
