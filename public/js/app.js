//const textForm = document.querySelector('form')
const textForm = document.querySelector('button')
const textQuery = document.querySelector('textarea')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')

textForm.addEventListener('click', (e) => {
  e.preventDefault()
  const text = textQuery.value
  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  messageThree.textContent = ''
  messageFour.textContent = ''
  fetch('http://localhost:3000/api?text='+ text).then((response)  => {
if (text.length <= 20) {
  messageOne.textContent = 'Text must be at least 20 characters long. Try again!'
} else {
  response.json().then((data) => {
    if(data.error) {
      messageOne.textContent = data.error
    } else { 
      messageOne.textContent = 'Here is the text: ' + data.yourText
      messageTwo.textContent = 'Text polarity: ' + data.polarity
      messageThree.textContent = 'Polarity confidence: ' + data.polarityConfidence
      messageFour.textContent = 'Subjectivity confidence: ' + data.subjectivityConfidence
      
    }
  })
}
})
})