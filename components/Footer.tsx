import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="font-bold uppercase tracking-widest text-xs mb-1">Garage BoiteMini</p>
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} Tous droits réservés.</p>
        </div>
        <Link href="/mentions-legales" className="text-xs text-slate-500 hover:text-slate-900 underline underline-offset-4">
          Mentions Légales
        </Link>
      </div>
    </footer>
  );
}