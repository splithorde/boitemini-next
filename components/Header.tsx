import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-100 z-50">
      <div className="container py-5 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold uppercase tracking-tighter">
          Boite<span className="text-amber-500">Mini</span>
        </Link>
        <nav className="flex items-center gap-8 font-medium text-xs uppercase tracking-widest">
          <Link href="/services" className="hover:text-amber-500 transition-colors">Services</Link>
          <Link href="/contact" className="bg-slate-900 text-white px-6 py-2.5 hover:bg-slate-800 transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
