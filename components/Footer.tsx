import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-center">
      <div className="container mx-auto space-y-4">
        <p className="text-sm uppercase tracking-widest">&copy; {new Date().getFullYear()} BoiteMini. Garage Expert.</p>
        <Link href="/mentions-legales" className="hover:text-accent transition-colors">Mentions Légales</Link>
      </div>
    </footer>
  );
}