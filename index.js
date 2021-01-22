const path = require('path')
require('dotenv').config()

const { NODE_ENV, SECRET } = process.env
console.log(NODE_ENV, SECRET)

console.log(path.resolve(__dirname), __filename)
