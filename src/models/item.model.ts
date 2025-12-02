import { Schema, model } from "mongoose";

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
  },
  { timestamps: true }
);

export const ItemModel = model("Item", itemSchema);
