import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import clientesRoutes from "../routes/clientes.js";
import stockRoutes from "../routes/stock.js";
import comunicacionesRoutes from "../routes/comunicaciones.js";
import contratosRoutes from "../routes/contratos.js";
import cursosRoutes from "../routes/cursos.js";
import archivosRoutes from "../routes/archivos.js";
import registroRoutes from "../routes/registro.js";
import credencialesRoutes from "../routes/credenciales.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import serverless from "serverless-http";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Conexión a MongoDB
await connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Rutas
app.use("/api/clientes", clientesRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/comunicaciones", comunicacionesRoutes);
app.use("/api/contratos", contratosRoutes);
app.use("/api/cursos", cursosRoutes);
app.use("/api/archivos", archivosRoutes);
app.use("/api/registro", registroRoutes);
app.use("/api/credenciales", credencialesRoutes);

// Exportar para Vercel
export const handler = serverless(app);
export default app;
