import { addProduct } from "@/actions/products";

export default async function addProductPage() {
  return (
    <div>
      <h2>Form</h2>
      <form action={addProduct}>
        <button>Submit</button>
      </form>
    </div>
  );
}
