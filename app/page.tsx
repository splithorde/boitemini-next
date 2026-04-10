import Link from 'next/link';

export default function Home() {
  return (
    <div className="container py-24 flex flex-col items-center text-center">
      <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-accent uppercase bg-rose-50 rounded-full">
        Expertise mécanique
      </div>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
        Votre garage <br />
        <span className="text-accent">de confiance</span>
      </h1>
      <p className="text-xl text-slate-600 max-w-lg mb-12">
        Entretien rigoureux, réparations fiables et diagnostic précis. Nous prenons soin de votre véhicule comme si c'était le nôtre.
      </p>
      <div className="flex gap-4">
        <Link 
          href="/contact" 
          className="bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-rose-700 transition-all shadow-lg shadow-rose-200"
        >
          Demander un devis
        </Link>
        <Link 
          href="/services" 
          className="bg-white border border-slate-200 px-8 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all"
        >
          Voir nos services
        </Link>
      </div>
    </div>
  );
}