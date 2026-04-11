import { Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6 font-bold text-white uppercase tracking-widest">BoiteMini</div>
        
        <div className="flex justify-center gap-6 mb-8">
          <a 
            href="https://www.facebook.com/pages/BoiteMini/244972728897536" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
          <a 
            href="https://twitter.com/BoiteMini" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </div>

        <p className="text-sm mb-8">© {new Date().getFullYear()} Garage BoiteMini. Services de maintenance automobile haut de gamme.</p>
        <nav className="flex gap-6 justify-center text-xs underline">
          <a href="/mentions-legales">Mentions Légales</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
