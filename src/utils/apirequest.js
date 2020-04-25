const request = require('request')
const dotenv = require('dotenv');
dotenv.config();


const apiRequest = (text, callback) => {
  const url = 'https://api.aylien.com/api/v1/sentiment?text=' + text
  request(
    {
      url: url,
      json: true,
      headers: {
        'X-AYLIEN-TextAPI-Application-Key': process.env.API_KEY,
        'X-AYLIEN-TextAPI-Application-ID': process.env.API_ID
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