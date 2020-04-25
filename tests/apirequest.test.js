const apiRequest = require('../src/utils/apirequest.js')




test('should make request to API and return non-error answer', () => {
  const result = apiRequest('some testing text for texting an API and stuff', (error, data) => {
    if (error) {
      return res.send({ error })
    } else {
      return data
    
    }
  
  })
})