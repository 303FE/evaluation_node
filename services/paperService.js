const paperModel = require('../models/paper')
/**
 * 新增试卷
 */
const createPaper = ({title, questions, endTime, startTime, type, typeId}) =>
    paperModel.create({title, questions, endTime, startTime, type, typeId})

/**
 * 删除试卷
 * @type {{createPaper: function({title: *, questions: *, endTime: *, startTime: *, type: *, typeId: *}): *}}
 */
const removePaper = (_id) => {
    return new Promise((resolve, reject) => {
        paperModel.deleteOne({_id}).exec((err, rel) => {
            err? reject(err) : resolve(rel)
        })
    })
}

/**
 * 查询所有试卷
 * @type {{createPaper: function({title: *, questions: *, endTime: *, startTime: *, type: *, typeId: *}): *, removePaper: {createPaper: function({title: *, questions: *, endTime: *, startTime: *, type: *, typeId: *}): *}}}
 */
const getAllPapers = () => {
    return new Promise((resolve, reject) => {
        paperModel.find({}).exec((err, rel) => {
            err? reject(err) : resolve(rel)
        })
    })
}

module.exports = {
    createPaper,
    removePaper,
    getAllPapers
}