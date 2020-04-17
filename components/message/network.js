const express = require("express");
const response = require("../../network/response");

const router = express.Router();

router.get("/", function (req, res) {
  console.log(req.headers);
  res.header({ "custom-header": "Our personalized value" });
  response.success(req, res, "message list");
});

router.post("/", function (req, res) {
  console.log(req.query);
  if (req.query.error == "ok") {
    response.error(
      req,
      res,
      "unespected error",
      500,
      "still working with simulation errors"
    );
  } else {
    response.success(req, res, "create it successfull", 201);
  }
});

module.exports = router;
