import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import connectDB from '../config/db.js';
import clientesRoutes from "../routes/clientes.js";
import stockRoutes from "../routes/stock.js";
import comunicacionesRoutes from "../routes/comunicaciones.js";
import contratosRoutes from "../routes/contratos.js";
import cursosRoutes from "../routes/cursos.js";
import registroRoutes from "../routes/registro.js";
import credencialesRoutes from "../routes/credenciales.js";
import serverless from "serverless-http";

dotenv.config();

await connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/clientes", clientesRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/comunicaciones", comunicacionesRoutes);
app.use("/api/contratos", contratosRoutes);
app.use("/api/cursos", cursosRoutes);
app.use("/api/registro", registroRoutes);
app.use("/api/credenciales", credencialesRoutes);

export default serverless(app);
