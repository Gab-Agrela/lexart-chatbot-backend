const { updateUserChatLogModel } = require("../models/User.model");

const findUserController = async (req, res) => {
  try {
    const { username } = req.query;
    const user = await findUser(username);
    if (user) {
      return res
        .status(200)
        .json({ message: "Success returning the user.", data: user });
    }
    return res.status(404).json({ message: "User not found" });
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
  findUserController,
  updateUserChatLogController,
};
