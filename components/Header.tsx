import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold uppercase tracking-tighter">
          Boite<span className="text-amber-500">Mini</span>
        </Link>
        <nav className="space-x-8 font-medium text-sm uppercase tracking-widest">
          <Link href="/services" className="hover:text-amber-500 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-white bg-slate-900 px-5 py-2 hover:bg-slate-700 transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}