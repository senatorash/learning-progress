const dotenv = require("dotenv");
// environmental variable configuration
dotenv.config();

const envVariables = {
  PORT: process.env.PORT,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  CLIENT_ID: process.env.CLIENT_ID,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  REFRESH_TOKEN: process.env.REFRESH_TOKEN,
  EMAIL_USER: process.env.EMAIL_USER,
};

module.exports = envVariables;
