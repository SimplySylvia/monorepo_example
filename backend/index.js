const express = require("express");
const path = require("path");
const CONFIG = require("@monorepoexample/config");

const app = express();

// TODO: Write API

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("/api/v1/", function (req, res, next) {
  return res.json({ message: "api hit" });
});

app.listen(CONFIG.PORT, () => console.log(`Listening on ${CONFIG.PORT}`));
