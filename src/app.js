
const path = require('path')
const express = require('express')
const apiRequest = require('./utils/apirequest.js')
const cors = require('cors')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
  res.send('hello')
})

app.get('/api', (req, res) => {
  if (!req.query.text) {
    return res.send({
      error: 'You must provide a text'
      
    })
  } else {
    const text = req.query.text
    apiRequest(text, (error, data) => {
      if (error) {
        return res.send({ error })
      } else {
        res.send({
          yourText: data.yourText,
          polarity: data.polarity,
          subjectivity: data.subjectivity,
          polarityConfidence: data.polarityConfidence,
          subjectivityConfidence: data.subjectivityConfidence
        })
      }
    })
  }
})

app.get('/*', (req, res) => {
  res.end('404')
})
module.exports = app