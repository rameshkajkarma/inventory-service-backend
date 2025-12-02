import { Item } from "../models/item.model";
import { CreateItemDto, UpdateItemDto } from "../dto/item.dto";

export class ItemService {
  async createItem(data: CreateItemDto) {
    return await Item.create(data);
  }

  async getAllItems() {
    return await Item.find();
  }

  async getItemById(id: string) {
    return await Item.findById(id);
  }

  async updateItem(id: string, data: UpdateItemDto) {
    return await Item.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteItem(id: string) {
    return await Item.findByIdAndDelete(id);
  }
}
