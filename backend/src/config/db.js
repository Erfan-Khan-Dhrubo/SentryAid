import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://erfankhan14561456:5e4iawVQeuJBmkaJ@cluster0.29aopbn.mongodb.net/noted_db?retryWrites=true&w=majority&appName=Cluster0");

    console.log("mongoDB successfully connected!!");
  } catch (error) {
    console.log("error connecting mongodb", error);
    process.exit(1);
  }
};
