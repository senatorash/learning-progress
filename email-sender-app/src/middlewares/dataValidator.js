// email validation middleware
const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  if (!email.includes("@")) {
    return res.status(400).json({ error: "Invalid email" });
  }

  next();
};

module.exports = { validateEmail };
