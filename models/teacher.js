const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.ObjectId
const Schema = mongoose.Schema

const teacherScheme = new Schema({
    name: String,
    password: String,
    collegeId: {
        type: ObjectId,
        ref: 'college'
    },
})

module.exports = mongoose.model('teacher', teacherScheme)