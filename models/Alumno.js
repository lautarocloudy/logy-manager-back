import mongoose from 'mongoose';
const alumnoSchema = new mongoose.Schema({
  nombre: String,
  tipoCliente: String,
  cursoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Curso' },
  cursoTitulo: String,
  precio: Number,
  pagado: { type: Boolean, default: false }
}, { timestamps: true });
export default mongoose.model('Alumno', alumnoSchema);
