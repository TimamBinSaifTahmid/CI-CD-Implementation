const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world IT is ci cd lab test");
});
app.listen(3000, () => {
  console.log("asd");
});
