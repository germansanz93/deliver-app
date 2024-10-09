import { NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { FaShoppingCart } from "react-icons/fa";
import { Badge } from "@nextui-org/react";

export const NavbarCart = ({itemCount}:{itemCount:number}) => {
  return (
      <Button
        isExternal
        isIconOnly
        as={Link}
        className="text-sm font-normal text-default-600 bg-default-100"
        href={siteConfig.links.sponsor}
        startContent={
          <Badge content={itemCount} color="danger" placement="bottom-right" isInvisible={itemCount == 0}>
          <FaShoppingCart
            style={{ fontSize: "20px" }}
          />
          </Badge>
        }
        color="primary"
        variant="light"
      ></Button>
  );
};
