const Books = require('../models/Books')

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
  const id = req.params.id
  // console.log(id)
  // console.table(req.params)
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
