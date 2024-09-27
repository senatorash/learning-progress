const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  res.json({ name: "John", age: 30 });
});

// export express app as a module to be imported in server.js file
module.exports = app;
