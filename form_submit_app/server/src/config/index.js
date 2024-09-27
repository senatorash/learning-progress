const dotenv = require("dotenv");
dotenv.config();

const envVariables = {
  PORT: process.env.PORT,
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  REFRESH_TOKEN: process.env.REFRESH_TOKEN,
  ACCESS_TOKEN: process.env.ACCESS_TOKEN,
  EMAIL_USER: process.env.EMAIL_USER,
};

module.exports = envVariables;
