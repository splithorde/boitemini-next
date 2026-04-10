import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="container grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">Garage BoiteMini</h3>
          <p className="text-sm">Expertise et précision mécanique. Votre sécurité est notre priorité.</p>
        </div>
        <div className="flex flex-col items-start md:items-end justify-between">
          <Link href="/mentions-legales" className="text-xs hover:text-white transition-colors">Mentions Légales</Link>
          <p className="text-xs mt-4 md:mt-0">© {new Date().getFullYear()} BoiteMini. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}