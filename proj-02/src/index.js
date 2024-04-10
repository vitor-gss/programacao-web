const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.get('/', (req, res)=> {
	res.send(`Hello Vitor! ${req.method}`)
})

app.post('/', function (req, res) {
	console.log(req.body);
	res.send('POST');
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})

// Projeto do vitu Vytuua