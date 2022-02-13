const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('dotenv').config()


// I know I know, directly putting this mongoDB connection username and password in the server.js file is bad practice, 
// but I'm just doing it for the sake of time. Because Spinning up a local mongoDB container is taking more time than I want to spend on this project.
const mongoose = require('mongoose')
mongoose
  .connect('mongodb+srv://sample:sample@cluster0.gnxus.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connected'))

const cors = require('cors')
app.use(cors())

const authRoutes = require('./routes/auth')

app.use('/api', authRoutes);

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('Server is running on port 5000')
})
