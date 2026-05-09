import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const sections = [
    { name: 'Moteur' },
    { name: 'Freinage' },
    { name: 'Transmission' },
    { name: 'Suspension' },
    { name: 'Échappement' },
    { name: 'Électricité' },
  ];

  for (const section of sections) {
    await prisma.section.upsert({
      where: { name: section.name },
      update: {},
      create: section,
    });
  }

  const motorSection = await prisma.section.findUnique({ where: { name: 'Moteur' } });
  const brakingSection = await prisma.section.findUnique({ where: { name: 'Freinage' } });

  if (motorSection && brakingSection) {
    await prisma.product.createMany({
      data: [
        {
          name: 'Kit de Distribution',
          description: 'Kit complet avec pompe à eau pour moteurs HDI.',
          stockQuantity: 15,
          costPrice: 85.00,
          sellingPrice: 149.99,
          imageUrl: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=400',
          sectionId: motorSection.id,
        },
        {
          name: 'Plaquettes de Frein Avant',
          description: 'Plaquettes haute performance pour freinage optimal.',
          stockQuantity: 24,
          costPrice: 22.50,
          sellingPrice: 45.00,
          imageUrl: 'https://images.unsplash.com/photo-1590528709020-9a83858079bc?auto=format&fit=crop&q=80&w=400',
          sectionId: brakingSection.id,
        }
      ]
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