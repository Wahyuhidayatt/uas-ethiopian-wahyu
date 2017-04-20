'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema

let userSchema = new Schema({
  username : String,
  email : String,
  password : String,
  articles : [{type : Schema.Types.ObjectId, ref : 'Article'}]
},{
  timestamps : true
})

let User = mongoose.model('User', userSchema)

module.exports = User
