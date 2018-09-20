const paperModel = require('../models/paper')
const studentModel = require('../models/student')
const teacherService = require('../services/teacherService')
const paperResultService = require('../services/paperResultService')
const teacherCourseService = require('../services/teacherCourseService')
const studentService = require('../services/studentService')

/**
 * 新增试卷
 */
const createPaper = ({title, questions, endTime, startTime, type, typeId}) =>
    paperModel.create({title, questions, endTime, startTime, type, typeId, status: 0})

/**
 * 发布试卷
 */
const pushPaper = ({_id, status}) => {
    return new Promise((resolve, reject) => {
        paperModel
            .findByIdAndUpdate({_id}, {status}, {new: true})
            .exec((err, rel) => {
                err? reject(err) : resolve(rel)
            })
    })
}

/**
 * 发布试卷并生成对应的 评价结果
 * @param _id
 * @returns {Promise|*|PromiseLike<T>|Promise<T>}
 */
const pushPaperAndCreateResult = ({_id}) => {
    return pushPaper({_id, status: 1})
        .then(rel => { // rel 为更新过后的 paper,下面根据rel.type 插入学生和教师评价结果
            if(rel.type == 3){ // 如果paper 的type为课程
                teacherCourseService
                    .getTeacherIdByCourseId(rel.typeId)  // 先查询课程对应的 teacherCourse 的_id
                    .then(teacherCourses => { // 拿到了teacherCourse 数组
                        let teacherCourseIds = []
                        teacherCourses.forEach(teacherCourse => {
                            teacherCourseIds.push(teacherCourse._id)
                        })
                        let condition = {teacherCourses: {$elemMatch: {$in: teacherCourseIds}}} //'5b95fe55e284782a9062eab0',

                        let p1 = studentService
                                    .getAllStus(condition)  // 查询学生中包含 teacherCourse 的 _id 的学生，再进行评价结果的插入。主要是查学生
                                    .then(studentList => {
                                        // 拿到学生数组，进行评价结果的插入
                                        let paperResults = [];
                                        studentList.forEach(student => {
                                            student.teacherCourses.forEach(teacherCourse => { // 遍历学生的 教师课程数组
                                                if(rel.typeId.includes(teacherCourse.course.toString())){ // 筛选出 需要的教师课程，进行评价结果的插入
                                                    paperResults.push(Object.assign({   // Object.assign({}, obj)  没效果？？
                                                        paper: _id,
                                                        userId: student._id,
                                                        type: 1,
                                                        grade: 0,
                                                        suggest: '',
                                                        status: false,
                                                        teacher: teacherCourse.teacher,
                                                        course: teacherCourse.course,
                                                    }))
                                                }
                                            })
                                        })
                                        return paperResultService.createPaperResult(paperResults)
                                    })

                        let p2 = rel.typeId.forEach(courseId => {
                                    teacherCourseService
                                        .getTeacherIdByCourseId(courseId)
                                        .then(teacherList=> { // 拿到课程对应的教师 id数组 [{},{}]
                                            teacherList.forEach(user => {
                                                teacherList.forEach(teacher => {
                                                    if (user.teacher.toString() != teacher.teacher.toString()) { // 评价人与被评价人不相同
                                                        paperResultService.createPaperResult([{
                                                            paper: _id,
                                                            userId: user.teacher,
                                                            course: courseId,
                                                            teacher: teacher.teacher,
                                                            type: 2,
                                                            grade: 0,
                                                            suggest: '',
                                                            status: false
                                                        }])
                                                    }
                                                })
                                            })
                                        })
                            })
                        Promise.all([p1, p2])
                    })
            }
            else{
                let condition = {}
                if(rel.type == 2){ // 如果paper 的type为院系，则查询学生和老师的时候得带条件
                    condition = {college: {$in: rel.typeId}}
                }
                let p1 = studentService
                    .getAllStus(condition)
                    .then(rel => {
                        // 拿到学生数组，进行评价结果的插入
                        let paperResults = [];
                        rel.forEach(student => {
                            student.teacherCourses.forEach(teacherCourses => {
                                paperResults.push(Object.assign({   // Object.assign({}, obj)  没效果？？
                                    paper: _id,
                                    userId: student._id,
                                    type: 1,
                                    grade: 0,
                                    suggest: '',
                                    status: false,
                                    teacher: teacherCourses.teacher,
                                    course: teacherCourses.course,
                                }))
                            })
                        })
                        return paperResultService.createPaperResult(paperResults)
                    })
                let p2 = teacherService
                    .getAllTeacher(condition)
                    .then(userList => { // 拿到教师数组
                        let paperResultArr = [];
                        userList.forEach((user, index) => {
                            teacherCourseService
                                .getCourseIdByTeacherId({teacher: user._id})
                                .then(courseList => { // 拿到教师对应的课程 id 数组 [{ }, { },]
                                    courseList.forEach(course => {
                                        teacherCourseService
                                            .getTeacherIdByCourseId(course.course)
                                            .then(teacherList=> { // 拿到课程对应的教师 id数组 [{},{}]
                                                teacherList.forEach(teacher => {
                                                    if(user._id.toString() != teacher.teacher.toString()){ // 评价人与被评价人不相同
                                                        paperResultService.createPaperResult([{
                                                            paper: _id,
                                                            userId: user._id,
                                                            course: course.course,
                                                            teacher: teacher.teacher,
                                                            type: 2,
                                                            grade: 0,
                                                            suggest: '',
                                                            status: false
                                                        }])
                                                    }
                                                })
                                            })
                                    })
                                })
                        })
                    })
                return Promise.all([p1, p2])
            }
        })

}

/**
 * 删除试卷
 * @type {{createPaper: function({title: *, questions: *, endTime: *, startTime: *, type: *, typeId: *}): *}}
 */
const removePaper = (_ids) => {
    return new Promise((resolve, reject) => {
        paperModel.deleteMany({_id: {$in: _ids} }).exec((err, rel) => {
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

/**
 * 通过id获取试卷
 * 学生or 教师通过id 获取试卷
 * @param _id
 * @returns {Promise<any>}
 */
const getPaperById = ({_id}) => {
    return new Promise((resolve, reject) => {
        paperModel.find({_id}).exec((err, rel) => {
            err? reject(err) : resolve(rel)
        })
    })
}

module.exports = {
    createPaper,
    removePaper,
    getAllPapers,
    pushPaper,
    pushPaperAndCreateResult,
}