const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET
app.get('/', (req, res) => {
  res.send('Rota GET: Olá, Mundo!');
});

app.get('/teste', (req, res) => {
  res.send('Rota de teste: Oi');
});

// POST
app.post('/', (req, res) => {
  const mensagem = req.body.mensagem;
  res.send(`Rota POST: Mensagem: "${mensagem}"`);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Aplicação rodando em http://localhost:${port}`);
});
