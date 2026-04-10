import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm uppercase tracking-wider mb-4">© {new Date().getFullYear()} Garage BoiteMini. Tous droits réservés.</p>
        <Link href="/mentions-legales" className="text-xs hover:text-white transition-colors underline decoration-slate-600">
          Mentions Légales
        </Link>
      </div>
    </footer>
  );
}