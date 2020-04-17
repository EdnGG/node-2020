// Mock de base de datos

const list = [];

function addMessage(message) {
  list.push(message);
}

function getMessages() {
  return list;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  //get : getMessage,
  //update : updateMessage,
  //delete : deleteMessage
};
