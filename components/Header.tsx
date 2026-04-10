import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-slate-900">
          BOITEMINI
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/services" className="text-slate-600 hover:text-indigo-600 transition-colors font-medium">Services</Link>
          <Link href="/contact" className="bg-slate-900 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-600 transition-all">
            Prendre RDV
          </Link>
        </nav>
      </div>
    </header>
  );
}