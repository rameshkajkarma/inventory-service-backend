import License, { ILicense } from "../models/license.model";
import { CreateLicenseDTO } from "../dto/license.dto";

export class LicenseService {
  async createLicense(data: CreateLicenseDTO, fileUrl: string): Promise<ILicense> {
    const license = new License({
      ...data,
      issueDate: new Date(data.issueDate),
      expiryDate: new Date(data.expiryDate),
      documentUrl: fileUrl,
    });

    return await license.save();
  }

  async getAllLicenses(): Promise<ILicense[]> {
    return License.find().sort({ createdAt: -1 });
  }

  async getLicenseById(id: string): Promise<ILicense | null> {
    return License.findById(id);
  }
async updateLicense(
  id: string,
  data: Partial<CreateLicenseDTO>,
  fileUrl?: string | null
): Promise<ILicense | null> {

  const existing = await License.findById(id);
  if (!existing) return null;

  if (fileUrl) {
    existing.documentUrl = fileUrl;     // if new file uploaded
  }

  if (data.licenseName) existing.licenseName = data.licenseName;
  if (data.licenseNumber) existing.licenseNumber = data.licenseNumber;
  if (data.issueDate) existing.issueDate = new Date(data.issueDate);
  if (data.expiryDate) existing.expiryDate = new Date(data.expiryDate);
  if (data.issuingAuthority) existing.issuingAuthority = data.issuingAuthority;

  return await existing.save();
}

  async deleteLicense(id: string): Promise<void> {
    await License.findByIdAndDelete(id);
  }
}

export const licenseService = new LicenseService();
