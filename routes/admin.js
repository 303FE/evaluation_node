var express = require('express')
var router = express.Router()
const questionService = require('../services/questionService')

/**
 * 管理员获取所有试题
 */
router.get('/question/getQuestions', function (req, res, next) {
    questionService.getQuestions()
        .then(rel => {
            res.json(rel)
        })
})

router.get('/question/removeQuestion')

module.exports = router