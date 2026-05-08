import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Default password is 'admin' as per ticket requirements
  const hashedPassword = await bcrypt.hash("admin", 10);

  // Create default admin user
  const admin = await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      username: "admin",
      password: hashedPassword,
      role: "admin",
    },
  });

  console.log(`Admin user '${admin.username}' verified/created.`);

  // Seed basic categories (Sections)
  const defaultSections = ["Moteur", "Boîte de vitesse", "Pneumatiques", "Freinage"];
  for (const name of defaultSections) {
    await prisma.section.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
  console.log("Default sections seeded.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
