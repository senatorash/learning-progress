// email validation middleware
const validateEmail = (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (!email.includes("@")) {
    return res.status(400).json({ error: "Invalid email" });
  }

  next();
};

module.exports = { validateEmail };
