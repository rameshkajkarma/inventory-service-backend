import Category, { ICategory } from "../models/category.model";
import { CreateCategoryDTO, UpdateCategoryDTO } from "../dto/category.dto";

class CategoryService {
  async create(data: CreateCategoryDTO): Promise<ICategory> {
    return await Category.create(data);
  }

  async findAll(): Promise<ICategory[]> {
    return await Category.find();
  }

  async findById(id: string): Promise<ICategory | null> {
    return await Category.findById(id);
  }

  async update(id: string, data: UpdateCategoryDTO): Promise<ICategory | null> {
    return await Category.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<ICategory | null> {
    return await Category.findByIdAndDelete(id);
  }
}

export default new CategoryService();
