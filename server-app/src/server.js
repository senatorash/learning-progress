const http = require("http");
const app = require("./app");
const httpServer = http.createServer(app);

const PORT = 4001;

const startServer = () => {
  httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();
