import { ItemModel } from "../models/item.model";
import { CreateItemDTO, UpdateItemDTO } from "../dto/item.dto";

export const itemService = {
  async create(data: CreateItemDTO) {
    return await ItemModel.create(data);
  },

  async getAll() {
    return await ItemModel.find();
  },

  async getById(id: string) {
    return await ItemModel.findById(id);
  },

  async update(id: string, data: UpdateItemDTO) {
    return await ItemModel.findByIdAndUpdate(id, data, { new: true });
  },

  async delete(id: string) {
    return await ItemModel.findByIdAndDelete(id);
  },
};
