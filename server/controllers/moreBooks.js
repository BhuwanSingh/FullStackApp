// upload more stories through the CSV coming through the API
const Books = require('../models/books')

exports.moreBooks = (req, res, next) => {
	const csv = req.body
	console.log(csv)
	// create a new array to store the data of an object which has title story and likes.
	const newBooks = []
	// convert the CSV to JSON and store it in the newBooks array.
	const lines = csv.stories.split(",")
	for (let i = 0; i < lines.length; i += 3) {
		book = {
			title: lines[i],
			story: lines[i + 1],
			likes: lines[i + 2],

		}
		newBooks.push(book)
	}
	// save the newBooks array to the database.
	Books.insertMany(newBooks)
		.then(() => {
			res.status(200).json({
				message: 'Books added successfully'
			})
		})
		.catch((err) => {
			res.status(500).json({
				error: err
			})
		}
	)
}
