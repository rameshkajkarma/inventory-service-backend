import { Request, Response } from "express";
import { licenseService } from "../services/license.service";

export class LicenseController {
  async create(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "Document file is required" });
      }

      const data = req.body;
      const fileUrl = `/uploads/licenses/${req.file.filename}`;

      const result = await licenseService.createLicense(data, fileUrl);
      return res.status(201).json({ message: "License created successfully", data: result });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const list = await licenseService.getAllLicenses();
      return res.status(200).json(list);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const license = await licenseService.getLicenseById(id);

      if (!license) return res.status(404).json({ message: "License not found" });

      return res.status(200).json(license);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
async update(req: Request, res: Response) {
  try {
    const id = req.params.id;

    const fileUrl = req.file
      ? `/uploads/licenses/${req.file.filename}`
      : null;

    const result = await licenseService.updateLicense(id, req.body, fileUrl);

    if (!result) {
      return res.status(404).json({ message: "License not found" });
    }

    return res.status(200).json({
      message: "License updated successfully",
      data: result,
    });

  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}

  async delete(req: Request, res: Response) {
    try {
      await licenseService.deleteLicense(req.params.id);
      return res.status(200).json({ message: "License deleted" });
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  }
}

  


export const licenseController = new LicenseController();
