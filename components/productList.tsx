"use client";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const ProductList = ({ products }:{products: {id: string, name: string, price: number, mediaUrl: string}[]}) => {
  const router = useRouter();
  return (
    <div>
      <div>
        <h2 className="py-4">Carniceria</h2>
      </div>
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => router.push(`/lo-de-sanz/carniceria/${item.id}`)}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.name}
                className="w-full object-cover h-[140px]"
                src={"/images/lo-de-sanz-carniceria.png"} //TODO item.mediaUrl || 
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.name}</b>
              <p className="text-default-500">{item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
