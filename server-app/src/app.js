const express = require("express");
const app = express();
const cors = require("cors");

// global middleware for accepting json data from client
app.use(express.json());

// global middleware for cross-origin resource sharing
app.use(cors());

app.get("/users", (req, res) => res.json({ Name: "john", Age: 30 }));

module.exports = app;
