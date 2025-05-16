const express = require("express");
const app = express();

const loggers = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();

  console.log(method, url, time);
  next()
}

app.get('/', loggers, (req, res) => {  
  res.status(200).send("Home Page.")
})

app.get('/about', loggers, (req, res) => {
  res.status(200).send("About page")
})

app.listen(5000, () => {
  console.log("Server is listening to the port 5000.");
})