const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const teacherScheme = new Schema({
    name: String,
    password: String,
    collegeId: ObjectId,
})

module.exports = mongoose.model('Teacher', teacherScheme)