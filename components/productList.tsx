"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { FaCartPlus, FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";

type Quantities = {
  [productId: string]: number;
}

export const ProductList = ({
  products,
}: {
  products: { id: string; name: string; price: number; mediaUrl: string }[];
}) => {
  const [quantities, setQuantities] = useState<Quantities>({});

  const increaseQuantity = (productId: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (productId: string) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max(0, (prevQuantities[productId] || 0) - 1),
    }));
  };
  return (
    <div>
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            // isPressable
            // onPress={() => router.push(`/lo-de-sanz/carniceria/${item.id}`)}
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
            <CardHeader className="justify-between">
              <b>{item.name}</b>
              <p className="text-default-500">${item.price}</p>
            </CardHeader>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center">
                <Button
                  color="primary"
                  isIconOnly
                  onClick={() => decreaseQuantity(item.id)}
                >
                  <FaMinus style={{ fontSize: "20px" }} />
                </Button>
                <span style={{ fontSize: "20px" }} className="px-4">{quantities[item.id] || 0}</span>
                <Button
                  color="primary"
                  isIconOnly
                  onClick={() => increaseQuantity(item.id)}
                >
                  <FaPlus style={{ fontSize: "20px" }} />
                </Button>
              </div>
              <div>
                <Button isIconOnly color="primary" aria-label="Cart">
                  <FaCartPlus style={{ fontSize: "20px" }} />
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
