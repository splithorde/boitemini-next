import { getProductById } from "@/app/actions/products";
import { getSections } from "@/app/actions/sections";
import { notFound } from "next/navigation";
import ProductEditForm from "./ProductEditForm";

export default async function EditProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);
  const sections = await getSections();

  if (!product) {
    notFound();
  }

  // Convert Decimal to number for the form to handle safely
  const serializedProduct = {
    ...product,
    costPrice: Number(product.costPrice),
    sellingPrice: Number(product.sellingPrice),
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Modifier le produit</h1>
        <ProductEditForm product={serializedProduct} sections={sections} />
      </div>
    </div>
  );
}