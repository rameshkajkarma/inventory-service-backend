import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  quantity: Number
});

export const Item = mongoose.model("Item", itemSchema);
