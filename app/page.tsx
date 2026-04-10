import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex-grow flex flex-col">
      <section className="container flex-grow flex flex-col justify-center items-start py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold text-amber-500 uppercase tracking-[0.2em] bg-amber-500/10">Service de précision</span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            La performance au service de votre véhicule.
          </h1>
          <p className="text-xl text-slate-600 mb-12 max-w-xl leading-relaxed">
            Experts en mécanique automobile, nous combinons savoir-faire technique et rigueur pour assurer la longévité de votre auto.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services" className="bg-slate-900 text-white px-10 py-4 font-bold hover:bg-slate-800 transition-all uppercase tracking-widest text-sm">
              Nos Services
            </Link>
            <Link href="/contact" className="border-2 border-slate-900 text-slate-900 px-10 py-4 font-bold hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-sm">
              Prendre RDV
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}