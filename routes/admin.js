const express = require('express')
const router = express.Router()
const resultHelper = require('../util/resultHelper')
const courseService = require('../services/courseService')
const collegeService = require('../services/collegeService')
const paperService = require('../services/paperService')
const questionService = require('../services/questionService')

// ===== 课程相关接口 ================

/**
 * 查询所有课程
 */
router.get('/getCourses', function (req, res, next) {
    courseService.getCourses()
        .then(rel => {
            res.json(resultHelper.success(rel, '获取成功'))
        })
        .catch(() => {
            res.json(resultHelper.failed('系统错误'))
        })
})

/**
 * 删除课程 参数 _id
 */
router.post('/removeCourse', function (req, res, next) {
    courseService.removeCourse(req.body._id)
        .then((rel) => {
            res.json(resultHelper.success(rel, '删除成功'))
        })
        .catch(() => {
            res.json(resultHelper.failed('系统错误'))
        })
})


/**
 * 新增课程 参数 _id name
 */
router.post('/createCourse', function (req, res, next) {
    courseService.createCourse({name: req.body.name})
        .then((rel) => {
            res.json(resultHelper.success(rel, '新增成功'))
        })
        .catch(() => {
            res.json(resultHelper.failed('系统错误'))
        })
})

/**
 * 修改课程 参数 _id name
 */
router.post('/updateCourse', function (req, res, next) {
    courseService.updateCourse({_id: req.body._id, name: req.body.name})
        .then((rel) => {
            res.json(resultHelper.success(rel, '修改成功'))
        })
        .catch(() => {
            res.json(resultHelper.failed('系统错误'))
        })
})

// ========= 院系相关接口 =============

/**
 * 获取所有院系
 */
router.get('/getColleges', function (req, res, next) {
    collegeService.getColleges()
        .then(rel => {
            res.json(resultHelper.success(rel, '获取成功'))
        })
        .catch(() => {
            res.json(resultHelper.failed('系统错误'))
        })
})

/**
 * 删除院系 参数 _id
 */
router.post('/removeCollege', function (req, res, next) {
    collegeService.removeCollege(req.body._id)
        .then(rel => {
            res.json(resultHelper.success(rel, '删除成功'))
        })
        .catch(() => {
            res.json(resultHelper.failed('系统错误'))
        })
})

/**
 * 新增院系 参数 name
 */
router.post('/createCollege', function (req, res, next) {
    collegeService.createCollege({name: req.body.name})
        .then(rel => {
            res.json(resultHelper.success(rel, '新增成功'))
        })
        .catch(() => {
            res.json(resultHelper.failed('系统错误'))
        })
})

/**
 * 修改院系 参数 _id , name
 */
router.post('/updateCollege', function (req, res, next) {
    collegeService.updateCollege({_id: req.body._id, name: req.body.name})
        .then(rel => {
            res.json(resultHelper.success(rel, '修改成功'))
        })
        .catch(() => {
            res.json(resultHelper.failed('系统错误'))
        })

})

// ====  评测卷相关接口

/**
 * 查询所有评测卷
 */
router.get('/getAllPapers', function (req, res, next) {
    paperService.getAllPapers()
        .then(rel => {
            res.json(resultHelper.success(rel, '获取成功'))
        })
        .catch(() => {
            res.json(resultHelper.failed('系统错误'))
        })
})

/**
 * 新增评测卷 参数 {title, questions, endTime, startTime, type, typeId}
 */
router.post('/createPapers', function (req, res, next) {
    paperService.createPaper(req.body)
        .then(rel => {
            res.json(resultHelper.success(rel, '新增成功'))
        })
        .catch(() => {
            res.json(resultHelper.failed('系统错误'))
        })
})

/**
 * 删除评测卷 参数 _id
 */
router.post('/removePaper', function (req, res, next) {
    paperService.removePaper(req.body._id)
        .then(rel => {
            res.json(resultHelper.success(rel, '删除成功'))
        })
        .catch(() => {
            res.json(resultHelper.failed('系统错误'))
        })
})

// ==== 题目相关接口

/**
 * 管理员获取所有试题
 */
router.get('/getQuestions', function (req, res, next) {
    questionService.getQuestions()
        .then(rel => {
            res.json(resultHelper.success(rel))
        })
        .catch(() =>{
            res.send(resultHelper.failed('系统错误'))
        })
})

/**
 * 删除试题接口，参数是题目的 _id
 */
router.post('/removeQuestion', function (req, res, next) {
    questionService.removeQuestion(req.body._id)
        .then(() => {
            res.json(resultHelper.success('','删除成功'))
        })
        .catch(() =>{
            res.send(resultHelper.failed('系统错误'))
        })
})

/**
 * 添加题目，参数content 题目内容
 */
router.post('/createQuestion', function (req, res, next) {
    questionService.createQuestion({content: req.body.content})
        .then(rel => {
            res.json(resultHelper.success(rel, '添加成功'))
        })
        .catch(() => {
            res.send(resultHelper.failed('系统错误'))
        })

})

/**
 * 修改题目，参数 _id, content
 */
router.post('/updateQuestion', function (req, res, next) {
    questionService.updateQuestion({_id: req.body._id, content: req.body.content})
        .then(rel => {
            res.json(resultHelper.success(rel, '修改成功'))
        })
        .catch(() => {
            res.json(resultHelper.failed('系统错误'))
        })
})


module.exports = router