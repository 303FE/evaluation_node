const courseService = require('../../services/courseService')
const resultHelper = require('../../util/resultHelper')

module.exports = router => {
  /**
   * 查询所有课程
   */
  router.get('/getCourses', function (req, res) {
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
  router.post('/removeCourse', function (req, res) {
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
  router.post('/createCourse', function (req, res) {
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
  router.post('/updateCourse', function (req, res) {
    courseService.updateCourse({_id: req.body._id, name: req.body.name})
      .then((rel) => {
        res.json(resultHelper.success(rel, '修改成功'))
      })
      .catch(() => {
        res.json(resultHelper.failed('系统错误'))
      })
  })
}