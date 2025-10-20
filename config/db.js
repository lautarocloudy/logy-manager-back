import mongoose from 'mongoose';

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect("mongodb+srv://logy:123@cluster0.pegtvdi.mongodb.net/logy-manager?retryWrites=true&w=majority", {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = !!db.connections[0].readyState;
    console.log("✅ MongoDB conectado correctamente");
  } catch (error) {
    console.error("❌ Error conectando MongoDB:", error.message);
    throw error;
  }
};

export default connectDB;
