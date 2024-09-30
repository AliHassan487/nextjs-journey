export default function ProductDetails({
  params,
}: {
  params: { productid: string };
}) {
  return <h1>Details about Product {params.productid}</h1>;
}
