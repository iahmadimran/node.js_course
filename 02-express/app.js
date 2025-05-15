const express = require('express');
const app = express();
const { people } = require('./data');
const { message } = require('statuses');

//static assets
app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({ extended: false }))

// parse json data 
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: "Please provide details." })
  }

  return res.status(200).json({ success: true, person: name })
})

app.post('/login', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.send(`The name you entered is ${name}. So, Welcome ${name}`)
  } else {
    res.status(404).send("Kindly provide the details.")
  }
})


app.listen(5000, () => {
  console.log("Server is listening to the port 5000...");
})
