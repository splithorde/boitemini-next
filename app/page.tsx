import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto text-center">
          <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Mécanique de précision</span>
          <h1 className="text-6xl md:text-8xl font-extrabold mt-6 mb-8">Expertise <br className="hidden md:block" /> Automobile.</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12">
            Confiez votre véhicule à des experts passionnés. Entretien, diagnostic et réparation dans un atelier moderne.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/services" className="bg-slate-900 text-white px-10 py-4 font-bold hover:bg-slate-800 transition-all">Nos Services</Link>
            <Link href="/contact" className="bg-slate-100 px-10 py-4 font-bold hover:bg-slate-200 transition-all">Nous Contacter</Link>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl mb-16">Pourquoi nous choisir ?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Transparence totale', 'Pièces certifiées', 'Expertise garantie'].map((item) => (
              <div key={item} className="p-8 bg-white border border-slate-200">
                <h3 className="text-xl mb-2">{item}</h3>
                <p className="text-slate-500">Qualité irréprochable et respect des délais pour votre tranquillité.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}