const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();
const { workingHoursMiddleware } = require("./middleware/workingHours");

// apply the middleware
app.use(workingHoursMiddleware);

// set up for ejs template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// set up for static files
app.use(express.static(path.join(__dirname, "public/styles.css")));

// ROUTES
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/services", (req, res) => {
  res.render("services");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = app;
