import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-slate-900 text-white p-4 z-50 border-b-2 border-accent">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-black uppercase tracking-tighter">
          Boite<span className="text-accent">Mini</span>
        </Link>
        <nav className="space-x-8 font-medium">
          <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
          <Link href="/contact" className="bg-accent text-slate-900 px-4 py-2 rounded hover:bg-yellow-500 transition-colors font-bold">Contact</Link>
        </nav>
      </div>
    </header>
  );
}