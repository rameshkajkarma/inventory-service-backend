import { Router } from "express";
import { createItem } from "../controllers/item.controller";

const router = Router();

router.post("/", createItem);

export default router;
