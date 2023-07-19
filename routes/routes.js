const express = require("express");
const {
  updateUserChatLogController,
  searchUserChatsController,
} = require("../controllers/User.controller");
const chatRouter = express.Router();

chatRouter.post("/insertNewChat", updateUserChatLogController);
chatRouter.get("/searchUserChat", searchUserChatsController);

module.exports = { chatRouter };
