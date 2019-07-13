const express = require('express');

const app = express();
app.listen(3000);

app.use((req, res, next) => {
  console.log("Hallo 1");
  next()
});
app.use((req, res, next) => {
  console.log("Hallo 2");
  next();
});

app.use("/users", (req, res, next) => {
  res.send("<h1>Hallo Users</h1>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hallo</h1>");
});