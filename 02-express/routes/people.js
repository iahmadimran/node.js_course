const express = require('express')
const router = express.Router()

let { people } = require('../data');



// GET - get the data from the server
router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

// POST - Add the data on the server
router.post('/', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: "Please provide details." })
  }

  return res.status(200).json({ success: true, person: name })
})

// POST - Add the data on the server
router.post("/postman", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: "Please provide details." })
  }
  return res.status(200).json({ success: true, data: [...people, { name }] })
})


// PUT - Update the data on the server
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res.status(400).json({ success: false, message: `No person with id: ${id}.` })
  }

  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person
  })
  return res.status(200).json({ success: true, data: newPeople })
})

// DELETE - Delete the data on the server
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res.status(400).json({ success: false, message: `No person with id: ${id}.` })
  }

  const updatedPeople = people.filter((person) => person.id !== Number(id))
  return res.status(200).json({ success: true, data: updatedPeople })
})

module.exports = router