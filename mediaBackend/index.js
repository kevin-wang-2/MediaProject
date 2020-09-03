const express = require("express");
const helmet = require("helmet");
const compression = require("compression");
const config = require("config");
const app = express();
const gases = require("./routes/gases");
const fruits = require("./routes/fruits");
const weight = require("./routes/weight");
const time = require("./routes/time");
const imageUrl = require("./routes/imageUrl");
const freshnessData = require("./routes/freshnessData");

app.use(express.static("public"));
app.use(express.json());
app.use(helmet());
app.use(compression());

app.use("/api/gases", gases);
app.use("/api/fruits", fruits);
app.use("/api/weight", weight);
app.use("/api/time", time);
app.use("/api/imageUrl", imageUrl);
app.use("/api/freshnessData", freshnessData);

const port = process.env.PORT || config.get("port");
app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});
