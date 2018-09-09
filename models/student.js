const mongoose  = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId
const Schema = mongoose.Schema({
  num: String,
  name: String,
  password: String,
  collegeId: {
    type: ObjectId,
    ref: 'college'
  },
  courses:[{
    courseId: {
      type: ObjectId,
      ref: 'course'
    },
    teacherId: {
      type: ObjectId,
      ref: 'teacher'
    }
  }]
})
module.exports = mongoose.model('student', Schema)