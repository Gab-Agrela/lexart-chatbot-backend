const mongoose = require("./connection");

const userSchema = new mongoose.Schema({
  username: String,
  chatList: [
    {
      dateTime: String,
      content: [
        {
          type: {
            type: String,
            required: true,
          },
          text: {
            type: String,
            required: true,
          },
          dateTime: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});

const User = mongoose.model("User", userSchema);

async function updateUserChatLogModel(username, chatlog) {
  try {
    const user = await User.findOne({ username: username });
    if (user) {
      user.chatList.push(chatlog);
      const savedUser = await user.save();
      return savedUser;
    } else {
      const newUser = new User({
        username: username,
        chatList: [chatlog],
      });
      const savedUser = await newUser.save();
      return savedUser;
    }
  } catch (error) {
    return error;
  }
}

async function searchUserChatsModel(username) {
  try {
    const user = await User.findOne({ username: username });
    if (user) {
      return user;
    }
    return "";
  } catch (error) {}
}

module.exports = {
  updateUserChatLogModel,
  searchUserChatsModel,
};
