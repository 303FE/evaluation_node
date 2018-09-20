const paperResultModel = require('../models/paperResult')

/**
 * 根据userId查询status为false的评价结果
 * @param userId
 * @returns {Promise<any>}
 */
const getPaperResultByUserId = ({userId}) => {
    return new Promise((resolve, reject) => {
        paperResultModel
            .find({userId, status: false})
            .populate([
                {path: 'paper', select: 'title'},
                {path: 'teacher', select: 'name'},
                {path: 'course', select: 'name'},
            ])
            .exec((err, rel) => {
                err? reject(err) : resolve(rel)
            })
    })
}


/**
 * 参数是一个 数组
 * 在发布一张测试卷的时候，调用此接口为学生和教师生成对应的的评价结果
 * @param userId
 * @param teacher
 * @param course
 * @param type
 * @returns {*}
 */
const createPaperResult = (paperResults) =>
    paperResultModel.create(paperResults)

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

const deletePaperResults = () => {
    return new Promise((resolve, reject) => {
        paperResultModel.deleteMany({}).exec((err, rel) => {
            err? reject(err) : resolve(rel)
        })
    })
}

module.exports = {
    getPaperResultByUserId,
    createPaperResult,
    updatePaperResult,
    deletePaperResults
}