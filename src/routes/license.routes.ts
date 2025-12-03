import { Router } from "express";
import { licenseController } from "../controllers/license.controller";
import { upload } from "../utils/upload";

const router = Router();

router.post("/", upload.single("document"), licenseController.create);
router.get("/", licenseController.getAll);
router.get("/:id", licenseController.getOne);

router.delete("/:id", licenseController.delete);

export default router;
