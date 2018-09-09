const collegeModel = require('../models/college')

/**
 * 获取所有评测院系
 * @returns {Promise<any>}
 */
const getColleges = () => {
    return new Promise((resolve, reject) => {
        collegeModel.find({}).exec((err, rel) => {
            err? reject(err) : resolve(rel)
        })
    })
}

/**
 * 删除院系通过id
 * @param _id
 * @returns {Promise<any>}
 */
const removeCollege = (_id) => {
    return new Promise((resolve, reject) => {
        collegeModel.deleteOne({_id}).exec((err) => {
            err? reject(err) : resolve()
        })
    })
}

/**
 * 修改院系
 * @param _id
 * @param content
 * @returns {Promise<any>}
 */
const updateCollege = ({_id, name}) => {
    return new Promise((resolve, reject) => {
        collegeModel.update({_id}, {name}).exec((err, rel) => {
            err? reject(err) : resolve(rel)
        })
    })
}

/**
 * 新增院系
 * @type {{getColleges: function(), removeCollege: function(*)}}
 */
const createCollege = ({name}) => collegeModel.create({name})

module.exports = {
    getColleges,
    removeCollege,
    updateCollege,
    createCollege
}