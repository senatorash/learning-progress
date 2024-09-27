const express = require("express");
const transport = require("./helpers/smtpTransport");
const { EMAIL_USER } = require("./config/index");
const { validateEmail } = require("./middlewares/dataValidator");
const app = express();
const cors = require("cors");

// global middleware for accepting json data from client
app.use(express.json());

// global middleware for cors
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is live");
});

app.post("/form-submit", validateEmail, (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  //   define mail options
  const mailOptions = {
    to: email,
    from: EMAIL_USER,
    subject: "New Form Submission",
    html: `<h1>New Form Submission</h1><p>First Name: ${firstName}</p><p>Last Name: ${lastName}</p><p>Email: ${email}</p><p>Message: ${message}</p><p>Phone: ${phone}</p>`,
  };

  transport.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
      res.status(400).json({ error: "send failed" });
    } else {
      res.status(200).json({ mesage: "email sent successfully" });
    }
  });
});

module.exports = app;
