import mongoose from 'mongoose';
const cursoSchema = new mongoose.Schema({
  titulo: String,
  indice: String,
  horas: Number,
  precio: Number
}, { timestamps: true });
export default mongoose.model('Curso', cursoSchema);
