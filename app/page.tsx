import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative bg-slate-50 py-24 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <span className="inline-block text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-6">
            Atelier de précision
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1]">
            L'excellence mécanique pour votre véhicule.
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Entretien rigoureux, diagnostic de pointe et réparation transparente. Confiez votre voiture à une équipe passionnée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary">Voir nos services</Link>
            <Link href="/contact" className="btn-outline">Prendre rendez-vous</Link>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6 container mx-auto grid md:grid-cols-3 gap-12">
        {[ { title: 'Diagnostic Rapide', desc: 'Analyse précise de vos pannes.' }, { title: 'Entretien Périodique', desc: 'Vidange, freins et révisions.' }, { title: 'Expertise Technique', desc: 'Spécialiste toutes marques.' } ].map((item) => (
          <div key={item.title} className="border-t-4 border-amber-500 pt-6">
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-600">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}