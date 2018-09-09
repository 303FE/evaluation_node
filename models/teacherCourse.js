const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherCourseSchema = new Schema({
    tId: ObjectId,
    cId: ObjectId,
})

module.exports = mongoose.Model('TeacherCourse', teacherCourseSchema)
