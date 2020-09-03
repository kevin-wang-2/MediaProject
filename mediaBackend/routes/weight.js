const express = require("express");
const router = express.Router();
const weightStore = require("../store/weight");

router.get("/", (req, res) => {
  const weight = weightStore.getWeight();
  res.send(weight);
});

module.exports = router;
