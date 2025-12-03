import { Schema, model, Document } from "mongoose";

export enum LicenseStatus {
  ACTIVE = "active",
  EXPIRING_SOON = "expiringSoon",
  EXPIRED = "expired",
  PENDING = "pending",
}

export interface ILicense extends Document {
  licenseName: string;
  licenseNumber: string;
  issueDate: Date;
  expiryDate: Date;
  issuingAuthority: string;
  documentUrl: string;
  status: LicenseStatus;
}

const LicenseSchema = new Schema<ILicense>(
  {
    licenseName: { type: String, required: true },
    licenseNumber: { type: String, required: true },
    issueDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true },
    issuingAuthority: { type: String, required: true },
    documentUrl: { type: String, required: true },

    status: {
      type: String,
      enum: Object.values(LicenseStatus),
      default: LicenseStatus.PENDING,
    }
  },
  { timestamps: true }
);

LicenseSchema.pre("save", function (next) {
  const now = new Date();
  const diffDays = Math.ceil((this.expiryDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) this.status = LicenseStatus.EXPIRED;
  else if (diffDays <= 30) this.status = LicenseStatus.EXPIRING_SOON;
  else this.status = LicenseStatus.ACTIVE;

  next();
});

export default model<ILicense>("License", LicenseSchema);
