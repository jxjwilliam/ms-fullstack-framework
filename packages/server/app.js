const express = require('express')
const http = require('http')
const path = require('path')
const createError = require('http-errors')
const logger = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const favicon = require('serve-favicon')
const { isEmpty } = require('@ms-fullstack/lib')
const aliExpress = require('./rapidapi/ali-express')
const walmart = require('./rapidapi/walmart')
const gitHub = require('./routes/github')

require('dotenv').config()

const port = process.env.PORT
if (isEmpty(port)) {
  throw new Error('port is empty')
}

const app = express()
app.use(logger('dev'))
app.use(helmet())
app.use(cors())
app.use(favicon(path.join(__dirname, 'favicon.svg')))

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => res.status(200).json({ msg: 'Flow Works!' }))

app.get('/api/message', (req, res) =>
  res.status(200).json({ msg: 'Welcome to Microservices Full-stack Monorepo Site!' }),
)

app.use('/rapidapi/ali-express', aliExpress)

app.use('/rapidapi/walmart', walmart)

app.use('/github', gitHub)

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)))

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.send({ msg: res.locals.message })
})

const server = http.createServer(app)
server.listen(port, () => {
  console.log(`🚒 ms-fullstack-framework 微服务运行在端口 ${port}!`)
})
