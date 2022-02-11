const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { createJWT } = require('../utils/auth')
const emailRegexp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

const passowrdRegexp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/

exports.signup = (req, res, next) => {
  let { email, password, password_confirmation } = req.body
  let errors = []
  if (!email) {
    errors.push({ email: 'required' })
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: 'invalid' })
  }
  if (!password) {
    errors.push({ password: 'required' })
  }
  if (!passowrdRegexp.test(password)) {
    errors.push({ password: 'invalid' })
  }
  if (!password_confirmation) {
    errors.push({
      password_confirmation: 'required',
    })
  }
  if (password != password_confirmation) {
    errors.push({ password: 'mismatch' })
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors })
  }
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        return res
          .status(422)
          .json({ errors: [{ user: 'email already exists' }] })
      } else {
        const user = new User({
          email: email,
          password: password,
        })
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(password, salt, function (err, hash) {
            if (err) throw err
            user.password = hash
            user
              .save()
              .then((response) => {
                res.status(200).json({
                  success: true,
                  result: response,                  
									// return auto generated userId
                })
              })
              .catch((err) => {
                res.status(500).json({
                  errors: [{ error: err }],
                })
              })
          })
        })
      }
    })
    .catch((err) => {
      res.status(500).json({
        errors: [{ error: 'Something went wrong' }],
      })
    })
}


exports.signin = async (req, res) => {
  let { email, password } = req.body
  let errors = []
  if (!email) {
    errors.push({ email: 'required' })
  }
  if (!emailRegexp.test(email)) {
    errors.push({ email: 'invalid email' })
  }
  if (!password) {
    errors.push({ passowrd: 'required' })
  }
  if (errors.length > 0) {
    return res.status(422).json({ errors: errors })
  }
  User.findOne({ email: email })
    .then((user) => {
      if (!user) {
        return res.status(404).json({
          errors: [{ user: 'not found' }],
        })
      } else {
        bcrypt
          .compare(password, user.password)          
          .then((isMatch) => {
            if (!isMatch) {
              return res
              .status(400)
              .json({ errors: [{ password: 'incorrect' }] })
            }
            // console.log(user.email)
            // console.log(user._id)
            let access_token = createJWT(user.email, user._id, 3600)
            jwt.verify(
              access_token,
              process.env.TOKEN_SECRET,
              (err, decoded) => {
                if (err) {
                  res.status(500).json({ erros: err })
                }
                if (decoded) {
                  console.log("user signed in")
                  return res.status(200).json({
                    success: true,
                    token: access_token,
                    message: user,
                  })
                }
              }
            )
          })
          .catch((err) => {
            console.log("here")
            res.status(500).json({ errors: err })
          })
      }
    })
    .catch((err) => {
      res.status(500).json({ erros: err })
    })
}