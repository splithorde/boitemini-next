import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="container px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold uppercase tracking-tighter">
          Boite<span className="text-amber-500">Mini</span>
        </Link>
        <nav className="hidden md:flex space-x-8 text-sm font-semibold uppercase tracking-widest text-slate-700">
          <Link href="/services" className="hover:text-amber-500 transition-colors">Services</Link>
          <Link href="/contact" className="text-white bg-slate-900 px-6 py-2 hover:bg-slate-800 transition-all">Contact</Link>
        </nav>
      </div>
    </header>
  );
}