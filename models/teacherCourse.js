const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teacherCourseSchema = new Schema({
    tId: {
        type: ObjectId,
        ref: 'teacher'
    },
    cId: {
        type: ObjectId,
        ref: 'course'
    },
})

module.exports = mongoose.Model('teacherCourse', teacherCourseSchema)
