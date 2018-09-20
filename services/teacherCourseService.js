const teacherCourseModel = require('../models/teacherCourse')

/**
 * 新增teacher 和 course 的关联记录
 * @param teacherId
 * @param courseId
 * @returns {*}
 */
const createTeacherCourse = ({teacher, course}) =>
    teacherCourseModel.create({teacher, course})


/**
 * 通过cId 批量删除teacherCourse
 * @param cId
 * @returns {Promise<any>}
 */
const removeTeacherCourseByCourseId = (course) => {
    return new Promise((resolve, reject) => {
        teacherCourseModel.deleteMany({course}).exec((err) => {
            err? reject(err) : resolve()
        })
    })
}

/**
 * 通过 tId 获取 教师对应的 cId
 * @param tId
 * @returns {Promise<any>}
 */
const getCourseIdByTeacherId = ({teacher}) => {
    return new Promise((resolve, reject) => {
        teacherCourseModel.find({teacher}, 'course').exec((err, rel) => {
            err? reject(err) : resolve(rel)
        })
    })
}

/**
 * 通过 cId 获取 课程对应的 tId
 * @param 参数可以是一个courseId 或者 courseId 数组
 * @returns {Promise<any>}
 */
const getTeacherIdByCourseId = (course) => {
    return new Promise((resolve, reject) => {
        teacherCourseModel.find({course: {$in: course}},'teacher').exec((err, rel) => {
            err? reject(err) : resolve(rel)
        })
    })
}

module.exports = {
    createTeacherCourse,
    removeTeacherCourseByCourseId,
    getCourseIdByTeacherId,
    getTeacherIdByCourseId
}