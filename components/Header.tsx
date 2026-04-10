import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-zinc-200 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold uppercase tracking-tighter">
          Boite<span className="text-amber-500">Mini</span>
        </Link>
        <div className="flex items-center gap-8">
          {['Services', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-amber-500 uppercase text-sm tracking-widest font-medium transition-colors">
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}