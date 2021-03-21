const unirest = require('unirest')
const express = require('express')

require('dotenv').config()

const router = express.Router()
const { Walmart_URL: URL, Walmart_KEY: KEY, Walmart_HOST: HOST } = process.env

router.get('/', (req, res) => {
  const request = unirest('GET', `${URL}/wlm/walmart-search-by-keyword`)
  request.query({
    page: '1',
    keyword: 'macbook',
    type: 'text',
    sortBy: 'best_match',
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

router.get('/', (req, res) => {
  const request = unirest('GET', `${URL}/wlm/walmart-lookup-product`)

  request.query({
    url: 'macbook',
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
