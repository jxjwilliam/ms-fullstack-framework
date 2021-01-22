// const path = require('path')
import path from 'path'

const { description } = require('./package.json')
require('dotenv').config()

const { NODE_ENV, SECRET } = process.env
console.log(path.resolve(__dirname), `${SECRET} ${NODE_ENV}: `)
console.log(description)
