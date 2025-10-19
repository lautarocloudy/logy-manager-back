import mongoose from 'mongoose';
const archivoSchema = new mongoose.Schema({
  filename: String,
  originalName: String,
  size: Number,
  url: String,
  uploadedAt: { type: Date, default: Date.now }
});
export default mongoose.model('Archivo', archivoSchema);
