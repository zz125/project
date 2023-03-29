exports.login = (req, res) => {
    res.send('login OK')
    
  }
  const bcrypt = require('bcryptjs')
  // 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
// userinfo.password = bcrypt.hashSync(userinfo.password, 10)
// 拿着用户输入的密码,和数据库中存储的密码进行对比
const compareResult = bcrypt.compareSync(用户输入的密码, 数据库中加密的密码)
// const jwt = require('jsonwebtoken')