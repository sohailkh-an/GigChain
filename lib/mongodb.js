import mongoose from "mongoose";
export const mongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
}