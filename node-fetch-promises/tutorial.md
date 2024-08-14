# Tutorial: Usando Promises em uma API Express/Node.js

Neste tutorial, vamos aprender a criar uma API usando Express e Node.js, com foco no uso de Promises. Vamos explorar duas abordagens: usando then/catch e a sintaxe moderna async/await.

O que você vai aprender:
1. O que são Promises.
2. Como fazer chamadas de API externas usando o fetch.
3. Como usar Promises com then/catch.
4. Como usar Promises com async/await.


## Preparando o Ambiente
Para começar, você precisa ter o Node.js e o npm (Node Package Manager) instalados. Se você ainda não os tem, pode baixá-los aqui.

Vamos criar um novo projeto Node.js.

1. Crie uma nova pasta para o projeto: 
```
    mkdir api-promises-express
    cd api-promises-express
```

2. Inicialize o projeto Node.js:
```
    npm init -y
```

3. Instale o Express:
```
npm install express
```

4. Vamos também instalar o node-fetch para fazer chamadas HTTP, que é o equivalente ao fetch do navegador:
```
npm install node-fetch
```

## Criando o Servidor Express
Vamos começar criando um servidor básico com Express.

1. Crie um arquivo index.js na pasta do projeto:
```
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

```

Esse código básico cria um servidor que escuta na porta 3000. Agora, vamos adicionar as rotas GET e POST que farão chamadas à API externa.

Usando Promises com then/catch
Primeiro, vamos implementar a rota GET usando then/catch.

1. Adicione a rota GET ao arquivo index.js:
```
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

```

**Explicação**:

* fetch: Faz uma requisição para a API externa https://jsonplaceholder.typicode.com/posts.
* .then(response => response.json()): Converte a resposta da API para JSON.
* .then(data => { res.json(data); }): Envia os dados recebidos para o cliente como resposta.
* .catch(error => { ... }): Captura qualquer erro que possa ocorrer durante a requisição ou processamento e envia uma mensagem de erro.

## Usando Promises com async/await
Agora, vamos implementar a rota POST usando async/await.

1. Adicione a rota POST ao arquivo index.js:
```
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

```

**Explicação**:
* async: Define a função como assíncrona, permitindo o uso de await dentro dela.
* await fetch(...): Faz a requisição HTTP e espera que ela seja completada antes de continuar.
* await response.json(): Converte a resposta para JSON e espera a conclusão antes de continuar.
* try/catch: Bloco para capturar erros, similar ao .catch das Promises.

## Testando a API

1. Para testar a API, inicie o servidor:
```
node index.js

```

2. Abra o navegador ou use uma ferramenta como Postman para fazer as requisições:
```
GET: http://localhost:3000/posts
POST: http://localhost:3000/posts-salvar (com um JSON no corpo da requisição)
```

**JSON do Post**
```
{
    "userId": 0,
    "id": 1,
    "title": "Teste na sala",
    "body": "Testando submissão de post"
  },
```


## Conclusão - parte 1
Agora você tem uma API simples criada com Express e Node.js que faz chamadas a uma API externa usando Promises, tanto com then/catch quanto com async/await. Essa prática é fundamental para trabalhar com operações assíncronas no JavaScript moderno.


# Parte 2

Vamos expandir o exemplo anterior para incluir também as rotas de GET (para buscar um post específico), PUT (para atualizar um post) e DELETE (para deletar um post). Cada uma dessas rotas usará tanto o método tradicional com then/catch quanto o método moderno com async/await.

## Adicionando a Rota GET (Buscar um Post Específico)

**Usando then/catch**

Vamos começar com uma rota GET que busca um post específico pelo ID:
```
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500).json({ message: 'Erro ao buscar o post', error });
        });
});

```

**Usando async/await**

Agora, a mesma rota usando async/await:
```
app.get('/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar o post', error });
    }
});

```

## Adicionando a Rota PUT (Atualizar um Post)

**Usando then/catch**

Agora, vamos adicionar uma rota PUT para atualizar um post existente:
```
app.put('/posts/:id', (req, res) => {
    const { id } = req.params;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    })
    .then(response => response.json())
    .then(data => {
        res.json(data);
    })
    .catch(error => {
        res.status(500).json({ message: 'Erro ao atualizar o post', error });
    });
});
```

**Usando async/await**

Agora, a rota PUT usando async/await:
```
app.put('/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o post', error });
    }
});

```

### Adicionando a Rota DELETE (Deletar um Post)

**Usando then/catch**

Finalmente, vamos adicionar uma rota DELETE para deletar um post:
```
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            res.json({ message: 'Post deletado com sucesso' });
        } else {
            throw new Error('Erro ao deletar o post');
        }
    })
    .catch(error => {
        res.status(500).json({ message: 'Erro ao deletar o post', error });
    });
});

```

**Usando async/await**

E aqui está a rota DELETE usando async/await:

```
app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            res.json({ message: 'Post deletado com sucesso' });
        } else {
            throw new Error('Erro ao deletar o post');
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar o post', error });
    }
});

```

### Código completo

```
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;

app.use(express.json());

// GET all posts
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

// GET a specific post by ID
app.get('/posts/:id', (req, res) => {
    const { id } = req.params;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            res.status(500).json({ message: 'Erro ao buscar o post', error });
        });
});

// POST a new post
app.post('/posts', async (req, res) => {
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

// PUT to update a post
app.put('/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar o post', error });
    }
});

// DELETE a post
app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            res.json({ message: 'Post deletado com sucesso' });
        } else {
            throw new Error('Erro ao deletar o post');
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar o post', error });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

```
