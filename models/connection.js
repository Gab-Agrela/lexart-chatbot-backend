const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/lexart";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
