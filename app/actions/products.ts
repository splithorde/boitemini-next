"use server";

import { prisma } from "@/lib/prisma";
import { productSchema } from "@/lib/zod-schemas";
import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";

export async function getProducts(search?: string, sectionId?: string) {
  return await prisma.product.findMany({
    where: {
      AND: [
        search ? { name: { contains: search, mode: 'insensitive' } } : {},
        sectionId && sectionId !== 'all' ? { sectionId } : {},
      ]
    },
    include: {
      section: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
}

export async function upsertProduct(data: z.infer<typeof productSchema> & { id?: string }) {
  const validated = productSchema.parse(data);

  const payload = {
    name: validated.name,
    stockQuantity: validated.stockQuantity,
    costPrice: new Prisma.Decimal(validated.costPrice),
    sellingPrice: new Prisma.Decimal(validated.sellingPrice),
    imageUrl: validated.imageUrl,
    description: validated.description,
    sectionId: validated.sectionId,
  };

  if (data.id) {
    await prisma.product.update({
      where: { id: data.id },
      data: payload
    });
  } else {
    await prisma.product.create({
      data: payload
    });
  }

  revalidatePath('/admin/products');
}

export async function deleteProduct(id: string) {
  await prisma.product.delete({
    where: { id }
  });
  revalidatePath('/admin/products');
}