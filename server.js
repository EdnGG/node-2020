// we need to follow the orden of these import lines strictly
const express = require("express");
const app = express();
const server = require("http").Server(app);

const cors = require("cors");
const bodyParser = require("body-parser");
const socket = require("./socket");

const db = require("./db");
const url = `mongodb+srv://db_user_chat-node:chat-node4444@cluster0-vpijp.mongodb.net/test?retryWrites=true&w=majority`;
const router = require("./network/routes");

db(url);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket.connect(server);

router(app);

app.use("/app", express.static("public"));

server.listen(3000, function () {
  console.log("application listening on port 3000");
});
