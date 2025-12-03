import multer from "multer";
import path from "path";
import fs from "fs";

// Ensure upload folder exists
const uploadPath = "uploads/licenses/";
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },

  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, unique + path.extname(file.originalname));
  }
});

function fileFilter(req: any, file: Express.Multer.File, cb: any) {
  const allowed = [".pdf", ".doc", ".docx"];

  const ext = path.extname(file.originalname).toLowerCase();

  if (!allowed.includes(ext)) {
    return cb(new Error("Invalid file type. Allowed: PDF, DOC, DOCX"));
  }

  cb(null, true);
}

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});
