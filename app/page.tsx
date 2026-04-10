import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col flex-grow">
      <section className="bg-slate-50 py-20 px-6">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Expertise et passion pour votre automobile
          </h1>
          <p className="text-xl text-slate-600 mb-10">
            Confiez votre véhicule à des mains expertes. Chez BoiteMini, nous allions précision technique et service client irréprochable.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}