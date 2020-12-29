import express from 'express'
import path from 'path'
import http from 'http'
import createError from 'http-errors'
import logger from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import favicon from 'serve-favicon'

require('dotenv').config();

const port = process.env.PORT || 8080

const app = express()
app.use(logger('dev'))
app.use(helmet())
app.use(cors())
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/', (req, res) => res.status(200).send('It Works!'))

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
  console.log(`🚒 ms-fullstack-test-framework 微服务运行在端口 ${port}!`)
})

module.exports = app
