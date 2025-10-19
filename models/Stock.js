import mongoose from 'mongoose';
const stockSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  clienteNombre: String,
  clienteEmail: String,
  destinatarioTipo: String,
  destinatarioNombre: String,
  destinatarioEmail: String,
  producto: String,
  cantidad: Number,
  tipoMovimiento: String
}, { timestamps: true });
export default mongoose.model('Stock', stockSchema);
