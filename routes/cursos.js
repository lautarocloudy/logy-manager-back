import express from 'express';
import Curso from '../models/Curso.js';
import Alumno from '../models/Alumno.js';
const router = express.Router();
router.get('/', async (req, res) => {
  const cursos = await Curso.find().sort({createdAt:-1});
  res.json(cursos);
});
router.post('/', async (req, res) => {
  const nuevo = new Curso(req.body);
  await nuevo.save();
  res.json(nuevo);
});
// alumnos
router.get('/alumnos', async (req, res) => {
  const alumnos = await Alumno.find().sort({createdAt:-1});
  res.json(alumnos);
});
router.post('/alumnos', async (req, res) => {
  const nuevo = new Alumno(req.body);
  await nuevo.save();
  res.json(nuevo);
});
export default router;
