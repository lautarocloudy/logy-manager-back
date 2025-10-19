import express from 'express';
import multer from 'multer';
import path from 'path';
import Archivo from '../models/Archivo.js';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload = multer({ dest: path.join(__dirname, '..', 'uploads') });
const router = express.Router();

router.post('/upload', upload.single('file'), async (req, res) => {
  const file = req.file;
  const url = `/uploads/${file.filename}`;
  const doc = new Archivo({
    filename: file.filename,
    originalName: file.originalname,
    size: file.size,
    url
  });
  await doc.save();
  res.json(doc);
});
router.get('/', async (req, res) => {
  const files = await Archivo.find().sort({uploadedAt:-1});
  res.json(files);
});
export default router;
