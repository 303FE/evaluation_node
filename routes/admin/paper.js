const paperService = require('../../services/paperService')
const resultHelper = require('../../util/resultHelper')
const teacherCourseService = require('../../services/teacherCourseService')
const paperResultService = require('../../services/paperResultService')

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
   * 删除评测卷 参数 _ids
   */
  router.post('/removePaper', function (req, res) {
    paperService.removePaper(req.body._ids)
      .then(rel => {
        res.json(resultHelper.success(rel, '删除成功'))
      })
      .catch(() => {
        res.json(resultHelper.failed('系统错误'))
      })
  })

  /**
   * 发布测评 参数 _id
   */
  router.get('/pushPaperAndCreateResult', function (req, res, next) {
    paperService.pushPaperAndCreateResult(req.query)
        .then(rel => {
            return paperService.pushPaper({_id: req.query._id, status: 2})
        })
        .then(rel => {
            res.json(resultHelper.success(rel, '发布成功'))
        })
        .catch(() => {
          res.json(resultHelper.failed('系统错误'))
        })
  })

    // 拿来版帮助我清空的，不用了就注释了
    router.get('/deletePaperResults', function (req, res, next) {

        paperResultService.deletePaperResults()
            .then(rel => {
                res.json(resultHelper.success(rel, '删除成功'))
            })
    })

}