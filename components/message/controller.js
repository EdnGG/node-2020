const store = require("./store");
function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messageControler, controller.js]:  Not User or Message");
      reject("Data is not correct");
      return false;
    }
    console.log(user);
    console.log(message);
    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    };
    store.add(fullMessage);
    console.log(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages() {
  return new Promise((resolve, reject) => {
    if (!resolve) {
      reject("No messages");
    } else {
      resolve(store.list());
    }
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    console.log(` ID: ${id}`);
    console.log(` Mensaje: ${message}`);
    if (!id || !message) {
      reject("Invalid data");
      return false;
    }
    const result = await store.updateText(id, message);
    resolve(result);
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
};
