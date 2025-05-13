const express = require("express");
const app = express();
const loggers = require('./loggers')

app.use(loggers)

app.get('/', loggers, (req, res) => {  
  res.status(200).send("Home Page.")
})

app.get('/about', loggers, (req, res) => {
  res.status(200).send("About page")
})

app.listen(5000, () => {
  console.log("Server is listening to the port 5000.");
})