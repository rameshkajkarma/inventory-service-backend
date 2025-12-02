import { Request, Response } from "express";
import * as itemService from "../services/item.service";

export const createItem = async (req: Request, res: Response) => {
  const item = await itemService.createItem(req.body);
  res.status(201).json(item);
};
