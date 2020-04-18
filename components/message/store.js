const db = require("mongoose");
const Model = require("./model");
const user = "db_user_chat-node";
const password = "chat-node4444";
const host = "cluster0-vpijp.mongodb.net";
const dataBase = "test";

const URI = `mongodb+srv://${user}:${password}@${host}/${dataBase}?retryWrites=true&w=majority`;

db.Promise = global.Promise;
db.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log("[db] connection successful");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  const messages = await Model.find();
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    id: id,
  });

  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  //get : getMessage,
  updateText: updateText,
  //delete : deleteMessage
};
