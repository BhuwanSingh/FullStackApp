const express = require('express')
const router = express.Router()
const { signup, signin } = require('../controllers/auth')
const { getBooks , getBook } = require('../controllers/books')
router.post('/signup', signup)
router.post('/signin', signin)
router.get('/books', getBooks)
router.get('/books/:id', getBook)
// router.get('/stories' , stories)
module.exports = router
