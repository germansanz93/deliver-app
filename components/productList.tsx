"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Button,
} from "@nextui-org/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "@/context/cart";
import { Product } from "@/dtos/Product";
import Decimal from 'decimal.js';


type Quantities = {
  [productId: string]: number;
}

export const ProductList = ({
  products,
}: {
  products: Product[];
}) => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    // Handle the case where cartContext is undefined
    return <div>Error: Cart context is not available.</div>;
  }

  const { cartItems, addToCart, removeFromCart } = cartContext;


  const increaseQuantity = (productId: string, step: number) => {
    console.log("productId", productId, "step", step)
    const p = products.find((product) => product.id === productId)
    if(p){
      addToCart(p, step);
    }
  };

  const decreaseQuantity = (productId: string, step: number) => {
    console.log("productId", productId, "step", step)
    const p = products.find((product) => product.id === productId)
    if(p){
      removeFromCart(p, step);
    }
  };


  const getItemById = (id: string): Product | undefined => {
    const prod: Product | undefined = cartItems.find((item: Product) => item.id === id);
    console.log("prod", prod)
    return prod
  };

  return (
    <div>
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((item, index) => {
          const cartItem = cartItems.find((cartItem: Product) => cartItem.id === item.id);
          return (
          <Card
            className={cartItem && cartItem.quantity && cartItem.quantity > 0 ? "card-selected" : ""}
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
                  onClick={() => decreaseQuantity(item.id, item.units[0].step)}
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
        )})}
      </div>
    </div>
  );
};
