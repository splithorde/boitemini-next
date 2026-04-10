import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h4 className="text-white font-bold mb-2">Garage BoiteMini</h4>
          <p className="text-sm">Expertise et précision au service de votre mécanique.</p>
        </div>
        <div className="md:text-right text-xs uppercase tracking-widest space-x-6">
          <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
