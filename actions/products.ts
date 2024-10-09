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

const getProductById = async (id: string) => {
  const product = await Product.findById(id);
  return {
    id: product._id.toString(),
    name: product.name,
    price: product.price,
    description: product.description,
    mediaUrl: product.mediaUrl,
    units: product.units,
  };
};

const getProducts = async () => {
  const products = await Product.find();
  console.log(products);
  return products.map((product) => ({
    id: product._id.toString(),
    name: product.name,
    price: product.price,
    description: product.description,
    mediaUrl: product.mediaUrl,
    units: product.units,
  }));
};

export { addProduct, getProducts, getProductById };
