"use client"

import { usePathname } from "next/navigation";

export default async function CarniceriaItemPage() {
  const pathName = usePathname();
  const id = pathName.split("/").pop()
  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
}