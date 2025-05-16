const express = require('express')
const router = express.Router()
const {
  getPeople,
  createPerson,
  createPostmanPerson,
  updatePerson,
  deletePerson
} = require('../controllers/people')


// GET - get the data from the server
// router.get('/', getPeople)

// POST - Add the data on the server
// router.post('/', createPerson)

// POST - Add the data on the server
// router.post("/postman", createPostmanPerson)

// PUT - Update the data on the server
// router.put('/:id', updatePerson)

// DELETE - Delete the data on the server
// router.delete('/:id', deletePerson)


router.route('/')
  .get(getPeople)
  .post(createPerson)

router.route('/postman')
  .post(createPostmanPerson)

router.route('/:id')
  .put(updatePerson)
  .delete(deletePerson)

module.exports = router