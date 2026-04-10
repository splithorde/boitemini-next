export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} BoiteMini. Tous droits réservés.
        </div>
        <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-500">
          <a href="#" className="hover:text-blue-600 transition-colors">Mentions légales</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Politique de confidentialité</a>
        </div>
      </div>
    </footer>
  );
}