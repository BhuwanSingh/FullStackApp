const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('dotenv').config()

const mongoose = require('mongoose')
mongoose
  .connect('mongodb://localhost:27017/FullstackAppDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connected'))

const cors = require('cors')
app.use(cors())

const authRoutes = require('./routes/auth')
const { db } = require('./models/User')

app.use('/api', authRoutes);

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' })
})

app.post('/api/world', (req, res) => {
  console.log(req.body)
  const text = req.body.post
  res.send(
    `I received your POST request. This is what you sent me: ${text}`
  )
})

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log('Server is running on port 5000')
})
