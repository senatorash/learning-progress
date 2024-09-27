const http = require("http");
const app = require("./app");
const httpServer = http.createServer(app);

const { PORT } = require("./config/index");

const startServer = () => {
  httpServer.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
};
startServer();
