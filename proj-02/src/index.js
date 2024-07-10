const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res)=> {
	res.send(`Hello Vitor!`)
})

app.post('/salvar', (req, res) => {
let nome = req.body.nome
	let email = req.body.email
	let subject = req.body.subject
	let message = req.body.message
	res.send(`${nome} <br> ${email} <br> ${subject} <br> ${message}`)
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
