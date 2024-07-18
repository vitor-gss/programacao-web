const express = require('express')
const app = express()
const port = 3000

// function funcaoGet(req, res){
// 	res.send('Hello World"')
// }

app.use(express.json())

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/ifal', (req, res) => {
	res.send('IFAL')
})

app.post('/salvar', (req, res) => {
		let nome = req.body.nome
		let nota = req.body.nota

		if(nota < 6){
			res.status(500).json({
				msg:"Vai estudar"
			});
			return;
		}

		let pessoa = {
			nome: nome,
			turma: '3 ano',
			instituto: 'IFAL'
		}

		res.json(pessoa);
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})