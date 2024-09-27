import http from "http";
import app from "./app";
import { connectDb } from "./utils/dbConfig";

const httpServer = http.createServer(app);

const PORT = 3000;

const startServer = async () => {
  await connectDb();
  httpServer.listen(PORT, () => {
    console.log(`Server is live on port: ${PORT}`);
  });
};

startServer();
