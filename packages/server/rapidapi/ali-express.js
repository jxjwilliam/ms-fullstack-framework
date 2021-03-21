const unirest = require('unirest')
const express = require('express')

require('dotenv').config()

const router = express.Router()
const { URL, KEY, HOST } = process.env

router.get('/categories', (req, res) => {
  // rapidapi_ali-express: request
  const request = unirest('GET', `${URL}/categories`)
  request.headers({
    'x-rapidapi-key': KEY,
    'x-rapidapi-host': HOST,
    useQueryString: true,
  })

  request.end(response => {
    if (response.error) throw new Error(response.error)
    res.json(response.body)
  })
})

router.get('/search/:item', (req, res) => {
  console.log('???', req.params, req.query, req.body)
  const { item } = req.params
  const request = unirest('GET', `${URL}/search`)

  request.query({
    query: item || 'Xiomi',
    page: '1',
  })

  request.headers({
    'x-rapidapi-key': KEY,
    'x-rapidapi-host': HOST,
    useQueryString: true,
  })

  request.end(response => {
    if (response.error) throw new Error(response.error)
    res.json(response.body)
  })
})

router.get('/:pid/category', (req, res) => {
  const { pid } = req.params
  // 205895301
  const request = unirest('GET', `${URL}/productsByCategoryV2/${pid}`)

  request.query({
    sort_order: 'default',
    page: '1',
    page_size: '20',
    sort_type: 'default',
  })

  request.headers({
    'x-rapidapi-key': KEY,
    'x-rapidapi-host': HOST,
    useQueryString: true,
  })

  req.end(response => {
    if (response.error) throw new Error(response.error)

    res.json(response.body)
  })
})

router.get('/:pid/feedback/', (req, res) => {
  const { pid } = req.params
  // 4001084094868
  const request = unirest('GET', `${URL}/product/${pid}/feedback/`)

  request.query({
    type: 'all',
    country: 'us',
    page: '1',
  })

  request.headers({
    'x-rapidapi-key': KEY,
    'x-rapidapi-host': HOST,
    useQueryString: true,
  })

  request.end(response => {
    if (response.error) throw new Error(response.error)
    res.json(response.body)
  })
})

module.exports = router
