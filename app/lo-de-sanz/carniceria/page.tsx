import { getProducts } from "@/actions/products";
import { ProductList } from "@/components/productList";

export default async function CarniceriaPage() {
  const products = await getProducts();

  return (
    <ProductList products={products} />
  );
}
