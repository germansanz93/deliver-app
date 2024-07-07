import { getProducts } from "@/actions/products";

export default async function CarniceriaPage() {
  const products = await getProducts();

  return (
    <div>
      {products.map((product) => (
        <div key={product._id}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.mediaUrl} alt={product.name} />
        </div>
      ))}
    </div>
  )
}