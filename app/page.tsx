import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      <section className="container py-24 md:py-32 flex flex-col items-start max-w-4xl">
        <div className="inline-flex items-center gap-2 text-amber-500 font-bold text-sm uppercase tracking-[0.2em] mb-6">
          <span className="w-8 h-[2px] bg-amber-500"></span>
          Garage Expert
        </div>
        <h1 className="text-6xl md:text-8xl font-extrabold text-slate-900 mb-8 leading-[0.9]">
          La mécanique <br className="hidden md:block" /> de précision.
        </h1>
        <p className="text-xl text-slate-600 mb-12 max-w-xl leading-relaxed">
          Confiez votre véhicule à une équipe passionnée. Entretien, diagnostic et réparation dans le respect des normes constructeur.
        </p>
        <div className="flex gap-4">
          <Link href="/services" className="bg-slate-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-all">
            Nos Prestations
          </Link>
          <Link href="/contact" className="border-2 border-slate-900 text-slate-900 px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-slate-50 transition-all">
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
