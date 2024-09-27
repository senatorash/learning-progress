import express from "express";
import User from "./models/userModel";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Server is Live" });
});

app.post("/users", async (req, res) => {
  try {
    const { email, firstName, lastName } = req.body;

    const user = new User(email, firstName, lastName);

    await user.save();

    return res.status(201).json({ message: "user created successfully", user });
  } catch (error: any) {
    res.status(500).json({ error: error.message || "something went wrong" });
  }
});

// get all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message || "something went wrong" });
  }
});

// get single user
app.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    return res.status(200).json(user);
  } catch (error: any) {
    res.status(500).json({ error: error.message || "something went wrong" });
  }
});

export default app;
