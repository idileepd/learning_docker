const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hi there fron node app");
});

app.listen(3000, () => {
  console.log("Listening - on 3000");
});
