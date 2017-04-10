const Mock = require('mockjs')

module.exports = function (req, res) {
  const data = Mock.mock({
    code: 0,
    error: '错误信息',
    data: {
      token: '用户 TOKEN'
    }
  })
  res.send(data)
}
