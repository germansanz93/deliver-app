export const ProductDetail = ({product}:{product: {id: string, name: string, price: number, mediaUrl: string}}) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <img src={product.mediaUrl} alt={product.name} />
    </div>
  );
}