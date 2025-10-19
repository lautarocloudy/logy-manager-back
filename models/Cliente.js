import mongoose from 'mongoose';
const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipo_cliente: String,
  contacto: String,
  email: String,
  telefono: String,
  redes: String,
  tema: String,
  actividad_economica: String,
  notas: String
}, { timestamps: true });
export default mongoose.model('Cliente', clienteSchema);
