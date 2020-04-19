const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.static("public"));

io.on("connection", (socket) => {
  console.log(`new client connected`);
  socket.emit("message", "welcome");
});

setInterval(() => {
  io.emit("message", "hello everyone !!");
}, 3000);

server.listen(8081, () => {
  console.log(`Server on port 8081`);
});
