const express = require('express')
const router = express.Router()

// POST - Add the data on the server
router.post('/', (req, res) => {
  const { name } = req.body;
  if (name) {
    res.send(`The name you entered is ${name}. So, Welcome ${name}`)
  } else {
    res.status(404).send("Kindly provide the details.")
  }
})

module.exports = router