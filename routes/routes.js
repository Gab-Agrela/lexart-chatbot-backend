const express = require("express");
const {
  updateUserChatLogController,
} = require("../controllers/User.controller");
const chatRouter = express.Router();

chatRouter.post("/insertNewChat", updateUserChatLogController);

module.exports = { chatRouter };
