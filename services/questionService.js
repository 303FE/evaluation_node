const questionModel = require('../models/question')

/**
 * 获取所有评测题目
 * @returns {Promise<any>}
 */
const getQuestions = () => {
    return new Promise((resolve, reject) => {
        questionModel.find({}).exec((err, rel) => {
            err? reject(err) : resolve(rel)
        })
    })
}

/**
 * 删除题目通过id
 * @param _id
 * @returns {Promise<any>}
 */
const removeQuestion = (_id) => {
    return new Promise((resolve, reject) => {
        questionModel.deleteOne({_id}).exec((err) => {
            err? reject(err) : resolve()
        })
    })
}

/**
 * 修改题目
 * @param _id
 * @param content
 * @returns {Promise<any>}
 */
const updateQuestion = ({_id, content}) => {
    return new Promise((resolve, reject) => {
        questionModel.update({_id}, {content}).exec((err, rel) => {
            err? reject(err) : resolve(rel)
        })
    })
}

/**
 * 新增题目
 * @type {{getQuestions: function(), removeQuestion: function(*)}}
 */
const createQuestion = ({content}) => questionModel.create({content})


module.exports = {
    getQuestions,
    removeQuestion,
    updateQuestion,
    createQuestion
}