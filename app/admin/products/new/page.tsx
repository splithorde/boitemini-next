import { prisma } from "@/lib/prisma";
import ProductForm from "@/components/admin/ProductForm";
import { verifySession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function NewProductPage() {
  const session = await verifySession();
  if (!session) {
    redirect("/admin/login");
  }

  const sections = await prisma.section.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Ajouter un produit</h1>
        <p className="text-gray-600 mt-2">
          Remplissez les informations ci-dessous pour ajouter un nouveau produit au catalogue.
        </p>
      </div>

      <ProductForm sections={sections} />
    </div>
  );
}