import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectToDB = () => {
    mongoose.connect(process.env.MONGODB_SERVER, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to mongoDB");
        })
}

export default connectToDB;