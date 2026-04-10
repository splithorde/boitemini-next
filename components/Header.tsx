import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <nav className="container mx-auto py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold uppercase tracking-tighter">
          Boite<span className="text-amber-500">Mini</span>
        </Link>
        <div className="flex gap-8 items-center">
          <Link href="/services" className="text-sm uppercase tracking-widest font-semibold hover:text-amber-500 transition-colors">Services</Link>
          <Link href="/contact" className="bg-slate-900 text-white px-6 py-2.5 text-sm uppercase tracking-widest font-bold hover:bg-slate-800 transition-all">Contact</Link>
        </div>
      </nav>
    </header>
  );
}