const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('OI!')
})

app.get('/hello', (req, res) => {
  res.send('Hello Vitor!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})