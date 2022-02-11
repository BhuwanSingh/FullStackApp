const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    story: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'book',
  }
)
module.exports = mongoose.model('book', bookSchema)
