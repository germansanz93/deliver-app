"use client";

import React from "react";
import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function LoDeSanzPage() {
  const list = [
    {
      title: "Carniceria",
      img: "/images/lo-de-sanz-carniceria.png",
      price: "$5.50",
    },
    {
      title: "Verduleria",
      img: "/images/lo-de-sanz-verduleria.png",
      price: "$3.00",
    },
    {
      title: "Almacen",
      img: "/images/lo-de-sanz-almacen.png",
      price: "$10.00",
    },
    {
      title: "Fiambreria",
      img: "/images/lo-de-sanz-fiambreria.jpg",
      price: "$5.30",
    },
    {
      title: "Bebidas",
      img: "/images/lo-de-sanz-bebidas.jpg",
      price: "$5.30",
    },
    {
      title: "Ofertas",
      img: "/images/lo-de-sanz-ofertas.jpg",
      price: "$5.30",
    },
  ];
  return (
    <div>
      <h1 className={title()}>Lo de Sanz</h1>
      <div>
        <h2 className="py-4">Categorias</h2>
      </div>
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>{item.title}</b>
              {/* <p className="text-default-500">{item.price}</p> */}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
