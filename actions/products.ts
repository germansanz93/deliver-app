"use server";

import Product from "@/models/product";

const addProduct = async () => {
  const product = new Product({
    name: "Product",
    price: 100,
    description: "Description",
    mediaUrl: "https://example.com",
  });
  const saved = await product.save();
  return saved.toObject();
};

const getProducts = async () => {
  return await Product.find();
};

export { addProduct, getProducts };
