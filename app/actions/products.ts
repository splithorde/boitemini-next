"use server";

import { prisma } from "@/lib/prisma";
import { productSchema } from "@/lib/zod-schemas";
import { revalidatePath } from "next/cache";

export async function getProducts(search?: string, sectionId?: string) {
  const products = await prisma.product.findMany({
    where: {
      AND: [
        search ? { name: { contains: search, mode: 'insensitive' } } : {},
        sectionId && sectionId !== "all" ? { sectionId: sectionId } : {}
      ]
    },
    include: {
      section: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  // Convert Decimal to Number for serialization
  return products.map(p => ({
    ...p,
    costPrice: Number(p.costPrice),
    sellingPrice: Number(p.sellingPrice),
  }));
}

export async function upsertProduct(data: any, id?: string) {
  const validated = productSchema.safeParse(data);
  if (!validated.success) {
    const errorMsg = validated.error.errors.map(e => e.message).join(", ");
    throw new Error("Données invalides : " + errorMsg);
  }

  const payload = {
    name: validated.data.name,
    stockQuantity: validated.data.stockQuantity,
    costPrice: validated.data.costPrice,
    sellingPrice: validated.data.sellingPrice,
    imageUrl: validated.data.imageUrl,
    description: validated.data.description,
    sectionId: validated.data.sectionId,
  };

  if (id) {
    await prisma.product.update({
      where: { id },
      data: payload
    });
  } else {
    await prisma.product.create({
      data: payload
    });
  }

  revalidatePath("/admin/products");
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: { id }
  });
  revalidatePath("/admin/products");
}