const http = require("http");
const { PORT } = require("./config/index");
const app = require("./app");
const httpServer = http.createServer(app);

const startServer = async () => {
  httpServer.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
  });
};
startServer();
