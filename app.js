// 导入 express 模块 
const express = require('express') 
// 创建 express 的服务器实
// 之后的其他配置都写在这里例 
const app = express() 
// 导入 cors 中间件 
const cors = require('cors') 
//设置public为静态文件的存放文件夹
app.use('/public',express.static('public'));
// 将 cors 注册为全局中间件，允许跨域请求 
app.use(cors())
app.use(express.urlencoded({ extended: false }))
const userRouter = require('./router/user')

app.use('/api', userRouter)
// 调用 app.listen 方法，指定端口号并启动web服务器 
app.listen(8888, function () {   
console.log('server is running at http://127.0.0.1:8888') 
})
// 导入配置文件
const config = require('./config')
// 解析 token 的中间件
const expressJWT = require('express-jwt')
// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: [/^\/login\//] }))