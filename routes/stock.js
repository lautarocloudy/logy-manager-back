import express from 'express';
import Stock from '../models/Stock.js';
const router = express.Router();
router.get('/', async (req, res) => {
  const items = await Stock.find().sort({createdAt:-1});
  res.json(items);
});
router.post('/', async (req, res) => {
  const nuevo = new Stock(req.body);
  await nuevo.save();
  res.json(nuevo);
});
router.delete('/:id', async (req, res) => {
  await Stock.findByIdAndDelete(req.params.id);
  res.json({message:'eliminado'});
});
export default router;
