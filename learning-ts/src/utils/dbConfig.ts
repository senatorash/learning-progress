import { MongoClient } from "mongodb";

export const mongoClient = new MongoClient("mongodb://localhost:27017/crud");

// connect database function
export const connectDb = async () => {
  await mongoClient
    .connect()
    .then(() => console.log("Database connected"))
    .catch((error) => console.log(error));
};
