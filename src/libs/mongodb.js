import mongoose from "mongoose";

const connectMongoDB = () => {
  try {
    mongoose.connect(
      "mongodb+srv://Anand:12345@cluster0.7lpqy.mongodb.net/Next"
    );
  } catch (error) {
    console.log("DB Not Connect Properly: ", error);
  }
};

export default connectMongoDB;