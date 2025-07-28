import mongoose from "mongoose";

const connectDb = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("Mongodb connection already running...");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI || "");
    console.log("Mongodb connection connected...");
  }

  catch (err) {
    console.log("Mongodb connection failed...\n", err);
  }
};

export default connectDb;
