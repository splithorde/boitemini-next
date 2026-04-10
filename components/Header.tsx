import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black uppercase tracking-tighter">
          Boite<span className="text-amber-500">Mini</span>
        </Link>
        <nav className="flex items-center gap-8 text-sm font-semibold uppercase tracking-widest">
          <Link href="/services" className="hover:text-amber-600 transition-colors">Services</Link>
          <Link href="/contact" className="bg-amber-500 text-white px-6 py-2.5 hover:bg-amber-600 transition-colors shadow-sm">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}