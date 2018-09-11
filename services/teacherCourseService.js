const teacherCourseModel = require('../models/teacherCourse')

/**
 * 新增teacher 和 course 的关联记录
 * @param teacherId
 * @param courseId
 * @returns {*}
 */
const createTeacherCourse = ({tId, cId}) =>
    teacherCourseModel.create({tId, cId})


/**
 * 通过cId 批量删除teacherCourse
 * @param cId
 * @returns {Promise<any>}
 */
const removeTeacherCourseByCourseId = (cId) => {
    return new Promise((resolve, reject) => {
        teacherCourseModel.deleteMany({cId}).exec((err) => {
            err? reject(err) : resolve()
        })
    })
}

/**
 * 通过 tId 获取 教师对应的 cId
 * @param tId
 * @returns {Promise<any>}
 */
const getCourseIdByTeacherId = ({tId}) => {
    return new Promise((resolve, reject) => {
        teacherCourseModel.find({tId}, 'cId').exec((err, rel) => {
            err? reject(err) : resolve(rel)
        })
    })
}

/**
 * 通过 cId 获取 课程对应的 tId
 * @param courseId
 * @returns {Promise<any>}
 */
const getTeacherIdByCourseId = ({cId}) => {
    return new Promise((resolve, reject) => {
        teacherCourseModel.find({cId},'tId').exec((err, rel) => {
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