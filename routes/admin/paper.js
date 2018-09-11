const paperService = require('../../services/paperService')
const resultHelper = require('../../util/resultHelper')

module.exports = router => {
  /**
   * 查询所有评测卷
   */
  router.get('/getAllPapers', function (req, res) {
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
  router.post('/createPapers', function (req, res) {
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
  router.post('/removePaper', function (req, res) {
    paperService.removePaper(req.body._id)
      .then(rel => {
        res.json(resultHelper.success(rel, '删除成功'))
      })
      .catch(() => {
        res.json(resultHelper.failed('系统错误'))
      })
  })
}