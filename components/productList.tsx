"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Button,
} from "@nextui-org/react";
import { FaCartPlus, FaMinus, FaPlus } from "react-icons/fa";
import { useState, useContext } from "react";
import { CartContext } from "@/context/cart";

type Quantities = {
  [productId: string]: number;
}

export const ProductList = ({
  products,
}: {
  products: { id: string; name: string; price: number; mediaUrl: string, quantity: number, units: {label:string, step: number}[] }[];
}) => {
  // const [quantities, setQuantities] = useState<Quantities>({});
  const { cartItems, addToCart , removeFromCart} = useContext(CartContext)

  const increaseQuantity = (productId: string, step: number) => {
    console.log("productId", productId, "step", step)
    // setQuantities((prevQuantities) => ({
    //   ...prevQuantities,
    //   [productId]: Math.max(0, Math.round(((prevQuantities[productId] + step) || 0) * 10) / 10),
    // }));
    addToCart(products.find((product) => product.id === productId), 1); //TODO reemplazar 1 por qty
  };

  const decreaseQuantity = (productId: string) => {
    // setQuantities((prevQuantities) => ({
    //   ...prevQuantities,
    //   [productId]: Math.max(0, Math.round((prevQuantities[productId] || 0) * 10 - 1) / 10),
    // }));
    removeFromCart(products.find((product) => product.id === productId), 1); //TODO reemplazar 1 por qty
  };


  const getItemById = (id: string): { id: string; name: string; price: number; mediaUrl: string, quantity: number, units: {label:string, step: number}[] } | undefined => {
    const prod = cartItems.find((item) => item.id == id);
    console.log("prod", prod)
    return prod
  };

  return (
    <div>
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((item, index) => (
          <Card
            className={cartItems[item.id] > 0 ? "card-selected" : ""}
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
            <CardFooter className="flex items-center justify-center">
              <div className="flex items-center justify-evenly" style={{width: "100%", maxWidth: "280px"}}>
                <Button
                  color="primary"
                  isIconOnly
                  onClick={() => decreaseQuantity(item.id)}
                >
                  <FaMinus style={{ fontSize: "20px" }} />
                </Button>
                {/* <span style={{ fontSize: "20px" }} className="px-4">{quantities[item.id] || 0} {item.units}</span> */}
                <div>
                  <span style={{ fontSize: "20px" }} className="px-4">{getItemById(item.id)?.quantity || 0}</span><span className="text-default-500">{item.units && item.units[0].label}</span>
                </div>
                <Button
                  color="primary"
                  isIconOnly
                  onClick={() => increaseQuantity(item.id, item.units[0].step)}
                >
                  <FaPlus style={{ fontSize: "20px" }} />
                </Button>
              </div>
              {/* <div>
                <Button isIconOnly color="primary" aria-label="Cart">
                  <FaCartPlus style={{ fontSize: "20px" }} />
                </Button>
              </div> */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
