import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="py-24 bg-white border-b border-zinc-100">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-block py-1 px-3 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest mb-6">Expertise certifiée</div>
          <h1 className="text-6xl md:text-8xl font-bold text-zinc-900 mb-8 max-w-4xl mx-auto tracking-tight">
            La mécanique de précision à votre service.
          </h1>
          <p className="text-xl text-zinc-600 mb-12 max-w-2xl mx-auto">
            Garage BoiteMini assure l'entretien complet et la réparation de votre véhicule avec rigueur, transparence et fiabilité.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Prendre Rendez-vous</Link>
            <Link href="/services" className="btn-secondary">Nos Services</Link>
          </div>
        </div>
      </section>
    </main>
  );
}