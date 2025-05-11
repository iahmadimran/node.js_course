const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("This is the home page.")
});

app.get('/about', (req, res) => {
  res.send("This is the page about our incredible story.")
});

app.all('*', (req, res) => {
  res.send("The page you are looking for is not currently available.")
});

app.listen(5000, () => {
  console.log('Server is listening to the port 5000.');
});
