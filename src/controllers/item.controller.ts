import { Request, Response } from "express";
import { itemService } from "../services/item.service";

export const itemController = {
  async create(req: Request, res: Response) {
    try {
      const item = await itemService.create(req.body);
      res.status(201).json(item);
    } catch (err) {
      res.status(400).json({ message: "Create failed", error: err });
    }
  },

  async getAll(_req: Request, res: Response) {
    const items = await itemService.getAll();
    res.json(items);
  },

  async getById(req: Request, res: Response) {
    const item = await itemService.getById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });
    res.json(item);
  },

  async update(req: Request, res: Response) {
    const updated = await itemService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ message: "Item not found" });
    res.json(updated);
  },

  async delete(req: Request, res: Response) {
    const deleted = await itemService.delete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Item not found" });
    res.json({ message: "Item deleted" });
  },
};
