const express = require('express')
const fetch = require('node-fetch')

require('dotenv').config()

const router = express.Router()
const URL = 'https://jobs.github.com/positions.json?search='

router.get('/:search', (req, res) => {
  const { search } = req.params
  fetch(`${URL}${search}`)
    .then(result => result.json())
    .then(data => res.json(data))
    .catch(error => {
      res.send(error?.message)
      throw new Error(error)
    })
})

module.exports = router
