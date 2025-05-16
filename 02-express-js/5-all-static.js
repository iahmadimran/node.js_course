const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./logics'));

app.all(`/any`, (req, res) => {
  res.status(404).send("The page you are looking for is not currently available.")
});

app.listen(5000, () => {
  console.log('Server is listening to the port 5000.');
});
