import path from 'path'

require('dotenv').config()

const port = process.env.PORT || 8080

console.log(path.resolve(__dirname), __filename)

console.log(`🚒 ms-fullstack-test-framework 微服务运行在端口 ${port}!`)
