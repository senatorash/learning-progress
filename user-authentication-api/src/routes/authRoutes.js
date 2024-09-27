const express = require("express");
const {
  loginUser,
  logoutUser,
  generateNewAccessToken,
  resetPasswordRequest,
  updateUserPassword,
} = require("../contollers/authController");
const requireSignin = require("../middlewares/requireSignin");
const authRouter = express.Router();
authRouter.post("/login", loginUser);
authRouter.post("/logout", requireSignin, logoutUser);
authRouter.post("/reset-password", resetPasswordRequest);
authRouter.put("/update-password", updateUserPassword);
authRouter.post("/access-token", generateNewAccessToken);
module.exports = authRouter;
