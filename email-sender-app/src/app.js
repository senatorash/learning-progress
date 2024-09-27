const express = require("express");
const transport = require("./helpers/smtpTransport");
const { EMAIL_USER } = require("./config/index");
const { validateEmail } = require("./middlewares/dataValidator");
const cors = require("cors");
const sanitizer = require("perfect-express-sanitizer");
const app = express();

// global middleware for accepting json data from client
app.use(express.json());

const corsOption = {
  origin: "http://localhost:3001",
  optionSuccessStatus: 200,
};

// global middleware for cross origin resource sharing
app.use(cors(corsOption));

// global middleware for sanitizing data
app.use(
  sanitizer.clean({
    xss: true,
    noSql: true,
    sql: true,
  })
);

app.get("/", (req, res) => {
  res.send("Server is Live");
});

app.post("/send-email", validateEmail, (req, res) => {
  const { email } = req.body;

  // define mail options
  const mailOptions = {
    to: email,
    from: EMAIL_USER,
    subject: "Testing email service",
    html: `<h1> We are testing out our email service </h1>`,
  };

  transport.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: "email send failed" });
    } else {
      res.status(200).json({ message: "email sent successfully" });
    }
  });
});

module.exports = app;
