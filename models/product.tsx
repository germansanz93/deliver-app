import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a price"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description"],
  },
  mediaUrl: {
    type: String,
    required: [true, "Please provide a mediaUrl"],
  },
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);