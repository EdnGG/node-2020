const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db");
const url = `mongodb+srv://db_user_chat-node:chat-node4444@cluster0-vpijp.mongodb.net/test?retryWrites=true&w=majority`;
db(url);

const router = require("./network/routes");

// we need to follow the orden of those lines
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("application listening on port 3000");
