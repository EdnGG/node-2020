const express = require("express");
const bodyParser = require("body-parser");
// const router = require("./components/message/network");

const router = require("./network/routes");

// we need to follow the orden of those lines
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(router);

router(app);

app.use("/app", express.static("public"));

app.listen(3000);
console.log("appilcation listening on port 3000");
