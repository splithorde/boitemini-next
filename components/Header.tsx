import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight text-slate-900">
          Boite<span className="text-blue-600">Mini</span>
        </Link>
        <nav className="flex items-center space-x-8 font-medium text-slate-700">
          <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
          <Link href="/contact" className="bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all">Prendre RDV</Link>
        </nav>
      </div>
    </header>
  );
}