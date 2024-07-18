const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log('Horário ação: ', Date.now())
  next()
})
// define a rota da homepage
router.get('/', (req, res) => {
  res.send('Homepage de pássaros')
})
// define a rota 'ajuda'
router.get('/ajuda', (req, res) => {
  res.send('Ajuda sobre pássaros')
})

module.exports = router