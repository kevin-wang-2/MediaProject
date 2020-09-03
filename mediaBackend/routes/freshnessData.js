const express = require("express");
const router = express.Router();
const freshnessDataStore = require("../store/freshnessData");

router.get("/", (req, res) => {
  const freshnessData = freshnessDataStore.getFreshnessData();
  res.send(freshnessData);
});

module.exports = router;
