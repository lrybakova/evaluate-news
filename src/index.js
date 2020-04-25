const app = require('./app')

const PORT = process.env.PORT



app.listen(PORT, () => {
  console.log('Server is running at the port 3000')
})