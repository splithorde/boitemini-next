import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    title: "Atelier mécanique",
    description: "Expertise technique complète pour l'entretien, la réparation et le diagnostic de votre véhicule, réalisée par des experts passionnés."
  },
  {
    title: "Vente de pièces détachées",
    description: "Accès à un large catalogue de pièces de rechange certifiées et d'accessoires de haute qualité pour garantir la longévité de votre automobile."
  },
  {
    title: "Optimisation Moteur",
    description: "Services de personnalisation et de réglages électroniques pour améliorer les performances, le couple et l'efficacité énergétique."
  },
  {
    title: "Partenariat",
    description: "Solutions de collaboration pour les professionnels de l'automobile et programmes de partenariat stratégiques avec l'écosystème BoiteMini."
  }
];

export default function Services() {
  return (
    <main className="flex-grow py-16 md:py-24">
      <div className="container mx-auto px-4">
        <header className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase border-l-8 border-amber-500 pl-6">
            Nos Services
          </h1>
          <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
            Découvrez l'étendue de notre savoir-faire. De l'entretien de précision à l'optimisation avancée, 
            BoiteMini s'engage pour l'excellence et la performance de votre véhicule.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              title={service.title} 
              description={service.description} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}
