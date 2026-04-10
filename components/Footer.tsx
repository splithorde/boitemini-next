import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="text-xl font-bold">BoiteMini</span>
          <p className="text-gray-400 text-sm mt-1">L'expertise automobile à votre service.</p>
        </div>
        <div className="flex space-x-6 text-sm">
          <Link href="/mentions-legales" className="text-gray-400 hover:text-white transition-colors">
            Mentions Légales
          </Link>
          <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}