let { people } = require('../data');


const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people })
}

const createPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: "Please provide details." })
  }

  return res.status(200).json({ success: true, person: name })
}

const createPostmanPerson = (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, message: "Please provide details." })
  }
  return res.status(200).json({ success: true, data: [...people, { name }] })
}

const updatePerson = (req, res) => {
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
}

const deletePerson = (req, res) => {
  const { id } = req.params;
  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res.status(400).json({ success: false, message: `No person with id: ${id}.` })
  }

  const updatedPeople = people.filter((person) => person.id !== Number(id))
  return res.status(200).json({ success: true, data: updatedPeople })
}

module.exports = {
  getPeople,
  createPerson,
  createPostmanPerson,
  updatePerson,
  deletePerson
}