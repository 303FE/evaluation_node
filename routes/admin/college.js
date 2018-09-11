const collegeService = require('../../services/collegeService')
const resultHelper = require('../../util/resultHelper')

module.exports = router => {
  /**
   * 获取所有院系
   */
  router.get('/getColleges', function (req, res) {
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
  router.post('/removeCollege', function (req, res) {
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
  router.post('/createCollege', function (req, res) {
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
  router.post('/updateCollege', function (req, res) {
    collegeService.updateCollege({_id: req.body._id, name: req.body.name})
      .then(rel => {
        res.json(resultHelper.success(rel, '修改成功'))
      })
      .catch(() => {
        res.json(resultHelper.failed('系统错误'))
      })

  })
}