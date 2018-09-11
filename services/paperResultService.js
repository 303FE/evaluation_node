const paperResultModel = require('../models/paperResult')

/**
 * 根据userId查询status为false的评价结果
 * @param userId
 * @returns {Promise<any>}
 */
const getPaperResultByUserId = ({userId}) => {
    return new Promise((resolve, reject) => {
        paperResultModel.find({userId, status: false}).exec((err, rel) => {
            err? reject(err) : resolve(rel)
        });
    })
}


/**
 * 根据userId，teacher, course, type生成的status为false的评价结果
 * 在生成一张测试卷的时候，调用此接口为学生和教师生成对应的status为false的评价结果
 * @param userId
 * @param teacher
 * @param course
 * @param type
 * @returns {*}
 */
const createPaperResult = ({userId, teacher, course, type}) =>
    paperResultModel.create({userId, teacher, course, type, grade: 0, suggest: '', status: false})

/**
 * 修改评价结果
 * 在学生or教师评价的时候，调用此接口修改已有的评价结果，status改为true
 * @param paperId
 * @param grade
 * @param suggest
 * @returns {Promise<any>}
 */
const updatePaperResult = ({_id, grade, suggest}) => {
    return new Promise((resolve, reject) => {
        paperResultModel.update({_id}, {grade, suggest, status: true}).exec((err, rel) => {
            err? reject(err) : resolve(rel)
        })
    })
}

module.exports = {
    getPaperResultByUserId,
    createPaperResult,
    updatePaperResult
}