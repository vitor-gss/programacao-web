import express, { json } from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;

app.use(json());

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.get('/posts', (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500).json({ message: 'Erro ao buscar posts', error });
        });
});

app.post('/posts-salvar', async (req, res) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao criar post', error });
    }
});