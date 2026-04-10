import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">BoiteMini</h3>
          <p className="text-sm">Expertise et précision pour votre automobile.</p>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/mentions-legales" className="text-sm hover:text-white">Mentions Légales</Link>
        </div>
        <p className="text-xs text-slate-500 text-right">
          &copy; {new Date().getFullYear()} Garage BoiteMini. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}