import express from 'express';
import Cliente from '../models/Cliente.js';
const router = express.Router();

router.get('/', async (req, res) => {
  const clientes = await Cliente.find().sort({createdAt:-1});
  res.json(clientes);
});
router.get('/:id', async (req, res) => {
  const c = await Cliente.findById(req.params.id);
  res.json(c);
});
router.post('/', async (req, res) => {
  const nuevo = new Cliente(req.body);
  await nuevo.save();
  res.json(nuevo);
});
router.put('/:id', async (req, res) => {
  const updated = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.json(updated);
});
router.delete('/:id', async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  res.json({message:'eliminado'});
});

export default router;
