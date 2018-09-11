const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId
const Schema = mongoose.Schema

const teacherScheme = new Schema({
  token: String,
    num: String,
    name: String,
    password: String,
    college: {
        type: ObjectId,
        ref: 'college'
    },
})


module.exports = mongoose.model('teacher', teacherScheme)