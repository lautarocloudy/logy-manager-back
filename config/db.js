import mongoose from 'mongoose';

const MONGO_URI = "mongodb+srv://logy:123@cluster0.pegtvdi.mongodb.net/logy-manager?retryWrites=true&w=majority";

let isConnected = false; // 🔒 cache de conexión

const connectDB = async () => {
  if (isConnected) {
    console.log("🟢 Ya conectado a MongoDB");
    return;
  }

  try {
    const db = await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000, // evita que tarde demasiado
    });
    isConnected = !!db.connections[0].readyState;
    console.log("✅ MongoDB conectado correctamente");
  } catch (error) {
    console.error("❌ Error conectando MongoDB:", error.message);
    throw new Error("Fallo la conexión a MongoDB");
  }
};

export default connectDB;
