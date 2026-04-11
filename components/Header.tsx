import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <nav className="container mx-auto px-4 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold uppercase tracking-tighter">
          Boite<span className="text-amber-500">Mini</span>
        </Link>
        <div className="flex gap-4 md:gap-8 items-center">
          <Link 
            href="/services" 
            className="text-xs md:text-sm uppercase tracking-widest font-semibold hover:text-amber-500 transition-colors"
          >
            Services
          </Link>
          <Link 
            href="/contact" 
            className="bg-slate-900 text-white px-4 md:px-6 py-2.5 text-xs md:text-sm uppercase tracking-widest font-bold hover:bg-slate-800 transition-all shadow-sm"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
