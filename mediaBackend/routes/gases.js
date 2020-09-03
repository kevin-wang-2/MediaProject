const express = require("express");
const router = express.Router();
const gasesStore = require("../store/gases");

router.get("/", (req, res) => {
  const gases = gasesStore.getGases();
  res.send(gases);
});

module.exports = router;
