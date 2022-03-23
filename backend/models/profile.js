const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  fname: String,
  sname: String,
  email: String,
  password: String,
  token: String,
  bio: String,
  cv:  String,
  github: String,
  linkedin: String,
  portfolio: String,
  available:{
    type:Boolean,
    default:true
  },
  location: String,
  picture: String,
  skills: Array,
  hired:{
    type:Boolean,
    default:false
  }
},
{
  timestamps:true
})

module.exports.Profile = mongoose.model('Profile', profileSchema)