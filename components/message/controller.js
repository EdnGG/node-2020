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

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));

    // if (!resolve) {
    //   reject("No messages");
    // } else {
    //   resolve(store.list());
    // }
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
    const result = await store.updateMessage(id, message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Invalid ID");
      return false;
    }
    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(`Error type: ${e}`);
      });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
