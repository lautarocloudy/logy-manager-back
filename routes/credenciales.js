import express from 'express';
import Credencial from '../models/Credencial.js';
const router = express.Router();
router.get('/', async (req, res) => {
  const items = await Credencial.find().sort({generadoEn:-1});
  res.json(items);
});
router.post('/', async (req, res) => {
  const nuevo = new Credencial(req.body);
  await nuevo.save();
  res.json(nuevo);
});
export default router;
