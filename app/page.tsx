import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      <section className="bg-slate-50 py-24 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 uppercase tracking-tight">Mécanique de Précision</h1>
        <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto">Votre véhicule mérite l'expertise d'un garage moderne et transparent.</p>
        <Link href="/services" className="btn-primary">Voir nos prestations</Link>
      </section>
      <section className="py-16 container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
        {['Diagnostic', 'Entretien', 'Réparation'].map((item) => (
          <div key={item} className="p-8 border-2 border-slate-100 hover:border-accent transition-all">
            <h3 className="text-xl font-bold mb-2">{item}</h3>
            <p className="text-slate-500">Expertise technique pour votre sécurité sur route.</p>
          </div>
        ))}
      </section>
    </div>
  );
}