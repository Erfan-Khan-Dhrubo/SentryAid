import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://erfankhan14561456_db_user:gDiZmjiDLcWD6Mqp@cluster0.emxfx8m.mongodb.net/SentryAid?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log("mongoDB successfully connected!!");
  } catch (error) {
    console.log("error connecting mongodb", error);
    process.exit(1);
  }
};
