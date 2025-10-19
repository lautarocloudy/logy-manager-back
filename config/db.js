import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    console.log("MONGO_URI:", process.env.uri);
await mongoose.connect("mongodb+srv://logy:123@cluster0.pegtvdi.mongodb.net/logy-manager?retryWrites=true&w=majority");
    console.log('✅ MongoDB conectado correctamente');
  } catch (error) {
    console.error('❌ Error conectando MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
