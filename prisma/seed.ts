import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Create default sections
  const sections = [
    'Moteur',
    'Freinage',
    'Carrosserie',
    'Éclairage',
    'Filtration',
    'Suspension',
    'Électronique',
  ];

  for (const name of sections) {
    await prisma.section.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log('Seed: Sections created.');

  const moteurSection = await prisma.section.findUnique({ where: { name: 'Moteur' } });
  const freinageSection = await prisma.section.findUnique({ where: { name: 'Freinage' } });

  if (moteurSection && freinageSection) {
    await prisma.product.create({
      data: {
        name: 'Piston Haute Performance',
        stockQuantity: 12,
        costPrice: 45.50,
        sellingPrice: 89.99,
        imageUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=200',
        description: 'Piston forgé pour moteurs haute performance, alliage ultra résistant.',
        sectionId: moteurSection.id,
      },
    });

    await prisma.product.create({
      data: {
        name: 'Disque de Frein Ventilé',
        stockQuantity: 4,
        costPrice: 22.00,
        sellingPrice: 55.00,
        imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=200',
        description: 'Disque de frein ventilé pour une meilleure dissipation thermique.',
        sectionId: freinageSection.id,
      },
    });

    console.log('Seed: Example products created.');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });