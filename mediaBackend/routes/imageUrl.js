const express = require("express");
const router = express.Router();
const imageStore = require("../store/imageUrl");

router.get("/", (req, res) => {
  const imageUrl = imageStore.getImageUrl();
  res.send(imageUrl);
});

module.exports = router;
