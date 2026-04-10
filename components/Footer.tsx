export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8 font-bold text-white uppercase tracking-widest">BoiteMini</div>
        <p className="text-sm mb-8">© {new Date().getFullYear()} Garage BoiteMini. Services de maintenance automobile haut de gamme.</p>
        <nav className="flex gap-6 justify-center text-xs underline">
          <a href="/mentions-legales">Mentions Légales</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}