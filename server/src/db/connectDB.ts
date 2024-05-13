import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error is connecting to database", error);
  }
};

export default connectDB;
