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
const options = {
	allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization'],
	credentials: true,
	origin: 'https://logy-manager.netlify.app/',
	preflightContinue: false,
	
	// origin: function (origin, callback) {
	//   const allowedOrigins = [
	// 	'https://ai-server-arg.netlify.app/',  // Dominio de producción
	// 	'http://localhost:3000',          // Localhost para desarrollo
	// 	  'http://127.0.0.1:5173/',
	// 	'null',                            // Permite el origen 'file://'
	//   ];
	//   if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
	// 	// Si el origen está en la lista o no hay origen (por ejemplo, en solicitudes 'file://')
	// 	callback(null, true);
	//   } else {
	// 	callback(new Error('Not allowed by CORS'));
	//   }
	// },
	// methods: 'GET,POST,PUT,DELETE,OPTIONS',
	// allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token', 'Authorization'],
	// credentials: true // Habilita las credenciales
};

// configurar cors
app.use(cors(options));
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


