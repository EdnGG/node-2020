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
    if (resolve) {
      resolve(store.list());
    } else {
      reject("No messages");
    }
  });
}

module.exports = {
  addMessage,
  getMessages,
};
