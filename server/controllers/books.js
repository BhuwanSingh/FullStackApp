const Books = require('../models/books')

exports.getBooks = (req, res, next) => {
  Books.find()
    .then((books) => {
      res.status(200).json({
        count: books.length,
        books: books,
      })
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      })
    })
}

exports.getBook = (req, res, next) => {
  const id = req.params.bookId
  Books.findById(id)
    .then((book) => {
      res.status(200).json(book)
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      })
    })
}
