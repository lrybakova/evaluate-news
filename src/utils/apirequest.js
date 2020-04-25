const request = require('request')


const apiRequest = (text, callback) => {
  const url = 'https://api.aylien.com/api/v1/sentiment?text=' + text
  request(
    {
      url: url,
      json: true,
      headers: {
        'X-AYLIEN-TextAPI-Application-Key': '51fc31345a0bb4f01edb4659f3e3748f',
        'X-AYLIEN-TextAPI-Application-ID': 'e5b72823'
      },
    }, (error, {body}={}) => {
      if (error) {
        callback('Unable to connect to service', undefined)
      } else if (text.length === 0) {
        callback('No text was provided. Please, insert some text into the form.', undefined)
      } else {
        callback(undefined, {
          yourText: body.text,
          polarity: body.polarity,
          subjectivity: body.subjectivity,
          polarityConfidence: body.polarity_confidence,
          subjectivityConfidence: body.subjectivity_confidence
        })
      }
    })
}

module.exports = apiRequest