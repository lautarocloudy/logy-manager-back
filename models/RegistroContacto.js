import mongoose from 'mongoose';
const registroSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  clienteNombre: String,
  contactoNombre: String,
  medio: String,
  detalle: String,
  fecha: { type: Date, default: Date.now },
  estado: { type: String, default: 'pendiente' }
}, { timestamps: true });
export default mongoose.model('RegistroContacto', registroSchema);
