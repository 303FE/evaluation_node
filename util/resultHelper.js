let _obj = {
  state: false,
  msg: ''
}

const success = (data = {}, msg = '请求成功') =>{
  return Object.assign(_obj, {
    state: true,
    msg,
    data
  })
}

const failed = (msg = '请求失败') =>{
  return Object.assign(_obj, {
    msg
  })
}

module.exports = {
  success,
  failed
}
