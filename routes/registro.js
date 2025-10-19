import express from 'express';
import RegistroContacto from '../models/RegistroContacto.js';
const router = express.Router();
router.get('/', async (req, res) => {
  const items = await RegistroContacto.find().sort({fecha:-1});
  res.json(items);
});
router.post('/', async (req, res) => {
  const nuevo = new RegistroContacto(req.body);
  await nuevo.save();
  res.json(nuevo);
});
router.delete('/:id', async (req, res) => {
  await RegistroContacto.findByIdAndDelete(req.params.id);
  res.json({message:'eliminado'});
});
export default router;
