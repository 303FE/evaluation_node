const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const teacherCourseSchema = new Schema({
    teacher: {
        type: ObjectId,
        ref: 'teacher'
    },
    course: {
        type: ObjectId,
        ref: 'course'
    },
})

module.exports = mongoose.model('teacherCourse', teacherCourseSchema)
