const express = require("express");
const {
  getUserDetails,
  createUser,
  login,
  updateUser,
} = require("./user.controller");
const userRouter = express.Router();

userRouter.get("/:nickname", getUserDetails);
userRouter.post("/register", createUser);
userRouter.post("/login", login);
userRouter.put("/:email", updateUser);

module.exports = userRouter;
