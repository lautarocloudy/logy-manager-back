import express from 'express';
import Comunicacion from '../models/Comunicacion.js';
const router = express.Router();
router.get('/', async (req, res) => {
  const items = await Comunicacion.find().sort({fecha:-1});
  res.json(items);
});
router.post('/', async (req, res) => {
  const nuevo = new Comunicacion(req.body);
  await nuevo.save();
  res.json(nuevo);
});
export default router;
