import { Request, Response } from "express";
import { ItemService } from "../services/item.service";
import { successResponse, errorResponse } from "../utils/response";

const service = new ItemService();

export class ItemController {
  async create(req: Request, res: Response) {
    try {
      const item = await service.createItem(req.body);
      return successResponse(res, item, "Item created successfully");
    } catch (err) {
      return errorResponse(res, err);
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const items = await service.getAllItems();
      return successResponse(res, items, "Items fetched successfully");
    } catch (err) {
      return errorResponse(res, err);
    }
  }

  async findOne(req: Request, res: Response) {
    try {
      const item = await service.getItemById(req.params.id);
      return successResponse(res, item, "Item fetched");
    } catch (err) {
      return errorResponse(res, err);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const item = await service.updateItem(req.params.id, req.body);
      return successResponse(res, item, "Item updated");
    } catch (err) {
      return errorResponse(res, err);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await service.deleteItem(req.params.id);
      return successResponse(res, null, "Item deleted");
    } catch (err) {
      return errorResponse(res, err);
    }
  }
}
