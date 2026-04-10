import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow py-20 px-6 text-center">
      <span className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-4">Expertise Automobile</span>
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 max-w-4xl">
        La maintenance de précision pour votre véhicule
      </h1>
      <p className="text-xl text-slate-600 mb-12 max-w-2xl">
        Garage BoiteMini vous accueille pour tous vos besoins en entretien, révision et réparation avec un service professionnel et transparent.
      </p>
      <div className="flex gap-4">
        <Link href="/contact" className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-all">
          Prendre rendez-vous
        </Link>
        <Link href="/services" className="bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-200 transition-all">
          Nos services
        </Link>
      </div>
    </div>
  );
}