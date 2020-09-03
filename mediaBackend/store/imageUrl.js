const config = require("config");

const baseUrl = config.get("assetsBaseUrl");
const imageUrl = [`${baseUrl}fruits2.jpg`];
getImageUrl = () => imageUrl;

module.exports = {
  getImageUrl,
};
