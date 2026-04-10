export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-6 py-12">
      <div className="inline-block bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
        Nouveau Site Web
      </div>
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
        Hello World !
      </h2>
      <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
        Bienvenue sur la future vitrine digitale du garage <span className="font-bold text-blue-700">BoiteMini</span>.
      </p>
      <div className="w-24 h-1 bg-blue-600 rounded mt-8"></div>
      <p className="text-lg text-gray-500 mt-8">
        Notre site est en cours de construction pour vous offrir la meilleure expérience.
      </p>
    </div>
  );
}
