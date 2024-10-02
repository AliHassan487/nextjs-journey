'use client';
import { notFound } from "next/navigation";

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ReviewDetail({
  params,
}: {
  params: { productid: string; reviewid: string };
}) {
const random =  getRandomInt(2);

  if(random === 1) {
    throw new Error("Something went wrong");
  }
  if(parseInt(params.reviewid) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {params.reviewid} for product {params.productid}
    </h1>
  );
}
