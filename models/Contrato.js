import mongoose from 'mongoose';
const contratoSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  clienteNombre: String,
  representanteAgencia: String,
  tipoCliente: String,
  tipoAcuerdo: String,
  inversion: Number,
  anticipo: Number,
  cuotasCantidad: Number,
  cuotaMonto: Number,
  bonificacion: Number,
  comision: Number,
  tribunales: String,
  auditoria: String,
  fechaInicio: Date,
  fechaVencimiento: Date,
  total: Number
}, { timestamps: true });
export default mongoose.model('Contrato', contratoSchema);
