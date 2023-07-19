const {
  updateUserChatLogModel,
  searchUserChatsModel,
} = require("../models/User.model");

const searchUserChatsController = async (req, res) => {
  try {
    const { username } = req.query;
    const user = await searchUserChatsModel(username);
    if (user) {
      return res.status(200).json({ message: "Success", data: user });
    }
    return res.status(200).json({ message: "User not found" });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

const updateUserChatLogController = async (req, res) => {
  try {
    const { username, chatLog } = req.body;
    const user = await updateUserChatLogModel(username, chatLog);
    return res.status(200).json({ message: "Success", data: user });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

module.exports = {
  searchUserChatsController,
  updateUserChatLogController,
};
