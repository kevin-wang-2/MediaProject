const express = require("express");
const router = express.Router();
const timeStore = require("../store/time");

router.get("/", (req, res) => {
  const time = timeStore.getTime();
  res.send(time);
});

module.exports = router;
