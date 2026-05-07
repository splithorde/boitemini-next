"use server";

import { prisma } from "@/lib/prisma";
import { sectionSchema } from "@/lib/zod-schemas";
import { revalidatePath } from "next/cache";

export async function getSections() {
  return await prisma.section.findMany({
    orderBy: {
      name: 'asc'
    }
  });
}

export async function createSection(data: { name: string }) {
  const validated = sectionSchema.safeParse(data);
  if (!validated.success) {
    throw new Error("Le nom de la section est invalide (min. 2 caractères)");
  }

  try {
    const section = await prisma.section.create({
      data: { name: validated.data.name }
    });
    revalidatePath("/admin/products");
    return section;
  } catch (error: any) {
    if (error.code === 'P2002') {
      throw new Error("Cette section existe déjà");
    }
    throw new Error("Une erreur est survenue lors de la création de la section");
  }
}