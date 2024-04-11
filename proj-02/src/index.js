const express = require('express')
const app = express()

const port = 3000

// app.use(express.json())
app.listen(express.urlencoded())

app.get('/', (req, res)=> {
	res.send(`Hello Vitor!`)
})

app.post('/', function (req, res) {
	let chapa = req.body.chapa1
	res.send(`Olá ${chapa.nome}, ${chapa.presidente}, ${chapa.diretor_politicas}`);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

// Projeto do vitu Vytuua