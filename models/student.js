const mongoose  = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId
const Schema = mongoose.Schema({
  token: String,
  num: String,
  name: String,
  password: String,
  college: {
    type: ObjectId,
    ref: 'college'
  },
  teacherCourses:[{
      type: ObjectId,
      ref: 'teacherCourse'
    }]
  // courses:[{
  //   course: {
  //     type: ObjectId,
  //     ref: 'course'
  //   },
  //   teacher: {
  //     type: ObjectId,
  //     ref: 'teacher'
  //   }
  // }]
})

module.exports = mongoose.model('student', Schema)