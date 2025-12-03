import { Request, Response } from "express";
import categoryService from "../services/category.service";
import { successResponse, errorResponse } from "../utils/response";

class CategoryController {
  
  async create(req: Request, res: Response) {
    try {
      const category = await categoryService.create(req.body);
      return successResponse(res, "Category created", category);
    } catch (error: any) {
      return errorResponse(res, error);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const categories = await categoryService.findAll();
      return successResponse(res, "Categories fetched", categories);
    } catch (error: any) {
      return errorResponse(res, error);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const category = await categoryService.findById(id);
      return successResponse(res, "Category fetched", category);
    } catch (error: any) {
      return errorResponse(res, error);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const updated = await categoryService.update(id, req.body);
      return successResponse(res, "Category updated", updated);
    } catch (error: any) {
      return errorResponse(res, error);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deleted = await categoryService.delete(id);
      return successResponse(res, "Category deleted", deleted);
    } catch (error: any) {
      return errorResponse(res, error);
    }
  }
}

export default new CategoryController();
