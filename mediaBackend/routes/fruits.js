const express = require("express");
const router = express.Router();
const fruitsStore = require("../store/fruits");

router.get("/", (req, res) => {
  const fruits = fruitsStore.getFruits();
  res.send(fruits);
});

module.exports = router;
