import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      <section className="flex-grow flex flex-col justify-center items-center p-12 bg-slate-50 text-center">
        <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-4">Expertise Automobile</span>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 max-w-4xl">
          Entretien et réparation mécanique de précision.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl">
          Un service professionnel, rapide et transparent pour prendre soin de votre véhicule au quotidien.
        </p>
        <div className="flex gap-4">
          <Link 
            href="/services" 
            className="bg-slate-900 text-white px-8 py-4 font-semibold hover:bg-slate-700 transition-all"
          >
            Nos Services
          </Link>
          <Link 
            href="/contact" 
            className="bg-white border border-slate-900 text-slate-900 px-8 py-4 font-semibold hover:bg-slate-100 transition-all"
          >
            Prendre Rendez-vous
          </Link>
        </div>
      </section>
    </div>
  );
}