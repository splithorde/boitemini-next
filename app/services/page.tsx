export default function Services() {
  return (
    <div className="container mx-auto py-16 px-4 flex-grow">
      <h1 className="text-4xl font-black text-slate-900 mb-12 uppercase border-l-4 border-accent pl-4">Nos Services</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {['Vidange & Filtres', 'Freinage', 'Géométrie', 'Distribution'].map((s) => (
          <div key={s} className="p-6 bg-slate-50 border-l-4 border-slate-900">
            <h2 className="text-2xl font-bold mb-2">{s}</h2>
            <p className="text-slate-600">Prestation réalisée selon les normes constructeur avec des pièces certifiées.</p>
          </div>
        ))}
      </div>
    </div>
  );
}