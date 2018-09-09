const courseModel = require('../models/course')

/**
 * 获取所有评测课程
 * @returns {Promise<any>}
 */
const getCourses = () => {
    return new Promise((resolve, reject) => {
        courseModel.find({}).exec((err, rel) => {
            err? reject(err) : resolve(rel)
        })
    })
}

/**
 * 删除课程通过id
 * @param _id
 * @returns {Promise<any>}
 */
const removeCourse = (_id) => {
    return new Promise((resolve, reject) => {
        courseModel.deleteOne({_id}).exec((err) => {
            err? reject(err) : resolve()
        })
    })
}

/**
 * 修改课程
 * @param _id
 * @param content
 * @returns {Promise<any>}
 */
const updateCourse = ({_id, name}) => {
    return new Promise((resolve, reject) => {
        courseModel.update({_id}, {name}).exec((err, rel) => {
            err? reject(err) : resolve(rel)
        })
    })
}

/**
 * 新增课程
 * @type {{getCourses: function(), removeCourse: function(*)}}
 */
const createCourse = ({name}) => courseModel.create({name})

module.exports = {
    getCourses,
    removeCourse,
    updateCourse,
    createCourse
}