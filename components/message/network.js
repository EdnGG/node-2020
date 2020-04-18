const express = require("express");
const response = require("../../network/response");
const controller = require("../message/controller");

const router = express.Router();

router.get("/", function (req, res) {
  controller
    .getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((e) => {
      response.error(req, res, "Unexpected error", 500, e);
    });
});

router.post("/", function (req, res) {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((err) => {
      response.error(
        req,
        res,
        "Invalid information",
        400,
        "[network.js] Error on Controller"
      );
    });
});

router.patch("/:id", function (req, res) {
  controller
    .updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 201);
    })
    .catch((e) => {
      response.error(req, res, "Intern Error", 500, e);
    });
  //res.send("ok");
});

module.exports = router;
