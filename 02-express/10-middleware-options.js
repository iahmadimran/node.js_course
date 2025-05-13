const express = require("express");
const app = express();
const morgan = require('morgan')

app.use(morgan('tiny'))

app.get('/', (req, res) => {  
  res.status(200).send("Home Page.")
})

app.get('/about', (req, res) => {
  res.status(200).send("About page")
})

app.listen(5000, () => {
  console.log("Server is listening to the port 5000.");
})