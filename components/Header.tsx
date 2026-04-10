import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="container py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-black uppercase tracking-tighter">
          Boite<span className="text-amber-500">Mini</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/services" className="text-sm font-semibold uppercase hover:text-amber-500 transition-colors">
            Services
          </Link>
          <Link href="/contact" className="text-sm font-bold uppercase bg-slate-900 text-white px-6 py-2.5 hover:bg-slate-800 transition-all">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}