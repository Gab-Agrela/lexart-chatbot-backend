const express = require("express");
const cors = require("cors");
const { chatRouter } = require("./routes/routes");

const app = express();
app.use(cors());
app.use(express.json());

const port = 3001;

app.use("/chat", chatRouter);

app.listen(port, () => console.log(`Server listening on port : ${port}!`));
