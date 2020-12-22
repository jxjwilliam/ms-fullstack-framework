import express from 'express'
import http from 'http'
import logger from 'morgan'
import createError from 'http-errors'

require('dotenv').config()

const port = process.env.PORT || 8080

const app = express()
app.use(logger('dev'))

app.get('/', (req, res) => res.status(200).send('It Works!'))

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)))

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.send({ msg: res.locals.message })
})

const server = http.createServer(app)
server.listen(port, () => {
  console.log(`ms-features 微服务运行在端口 ${port}!`)
})

module.exports = app
