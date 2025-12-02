import { Schema, model } from "mongoose";

const ItemSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Item = model("Item", ItemSchema);
