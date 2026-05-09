import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Default sections for automotive parts
  const sections = [
    'Pièces Moteur',
    'Freinage',
    'Suspension et Direction',
    'Échappement',
    'Électronique et Éclairage',
    'Entretien et Vidange'
  ];

  for (const name of sections) {
    await prisma.section.upsert({
      where: { name },
      update: {},
      create: { name }
    });
  }

  const motorSection = await prisma.section.findUnique({ where: { name: 'Pièces Moteur' } });
  const brakingSection = await prisma.section.findUnique({ where: { name: 'Freinage' } });

  if (motorSection && brakingSection) {
    // Sample Products
    await prisma.product.create({
      data: {
        name: 'Kit de Distribution',
        description: 'Kit complet avec courroie et galets pour moteurs diesel.',
        stockQuantity: 15,
        costPrice: 85.00,
        sellingPrice: 145.00,
        imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=400',
        sectionId: motorSection.id
      }
    });

    await prisma.product.create({
      data: {
        name: 'Plaquettes de Frein AV',
        description: 'Plaquettes de frein haute performance pour train avant.',
        stockQuantity: 24,
        costPrice: 22.50,
        sellingPrice: 48.90,
        imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=400',
        sectionId: brakingSection.id
      }
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });