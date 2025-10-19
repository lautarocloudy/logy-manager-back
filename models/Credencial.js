import mongoose from 'mongoose';
const credencialSchema = new mongoose.Schema({
  denominacion: String,
  tipoCliente: String,
  vencimiento: Date,
  datos: Object,
  generadoEn: { type: Date, default: Date.now }
}, { timestamps: true });
export default mongoose.model('Credencial', credencialSchema);
