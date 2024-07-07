export default async function CarniceriaItemPage({params}:{params: {id: string}}) {
  return (
    <div>
      <h2>Item {params.id}</h2>
    </div>
  );
}