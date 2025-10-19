import express from 'express';
import Contrato from '../models/Contrato.js';
const router = express.Router();
router.get('/', async (req, res) => {
  const items = await Contrato.find().sort({createdAt:-1});
  res.json(items);
});
router.post('/', async (req, res) => {
  const nuevo = new Contrato(req.body);
  await nuevo.save();
  res.json(nuevo);
});
export default router;
