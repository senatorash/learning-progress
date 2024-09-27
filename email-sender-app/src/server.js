const http = require("http");
const app = require("./app");
const { PORT } = require("./config/index");
const httpServer = http.createServer(app);

const startServer = async () => {
  httpServer.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
};

startServer();
