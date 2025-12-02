import { Item } from "../models/item.model";
import { CreateItemDto } from "../dto/item.dto";

export const createItem = async (data: CreateItemDto) => {
  return await Item.create(data);
};
