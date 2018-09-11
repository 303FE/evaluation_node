const questionService = require('../../services/questionService')
const resultHelper = require('../../util/resultHelper')

module.exports = router => {
  /**
   * 管理员获取所有试题
   */
  router.get('/getQuestions', function (req, res) {
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
  router.post('/removeQuestion', function (req, res) {
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
  router.post('/createQuestion', function (req, res) {
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
}