const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: String,
  password: String,
  userName: String,
  token: String,
  role: {
    type: String,
    default: "participant"
  }
})

module.exports.User = mongoose.model('User', userSchema, 'User')