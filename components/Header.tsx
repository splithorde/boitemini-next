import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-20">
        <Link href="/" className="text-xl font-bold tracking-tighter uppercase">
          Boite<span className="text-accent">Mini</span>
        </Link>
        <nav className="flex items-center gap-8">
          <Link href="/services" className="text-sm font-medium hover:text-accent transition-colors">Services</Link>
          <Link href="/contact" className="text-sm font-medium bg-slate-900 text-white px-5 py-2 rounded-full hover:bg-slate-800 transition-all">
            Prendre RDV
          </Link>
        </nav>
      </div>
    </header>
  );
}