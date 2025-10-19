import mongoose from 'mongoose';
const comSchema = new mongoose.Schema({
  tipo: String,
  destinatario: String,
  emailArchivo: String,
  detalle: String,
  fecha: Date,
  estado: { type: String, default: 'pendiente' }
}, { timestamps: true });
export default mongoose.model('Comunicacion', comSchema);
