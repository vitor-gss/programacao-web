# Exercício 1: 
**Usando .then() com Fetch**

Tarefa: Crie uma rota get que busque dados de usuários da API e filtre os usuários cujo nome começa com a letra "C". Exiba os resultados no console.

---------------------------------------

Aqui está a implementação do exercício solicitado, usando .then() com fetch em uma rota GET no Express.

**Passos do Exercício:**
1. Faça uma solicitação GET para a URL https://jsonplaceholder.typicode.com/users.
2. Converta a resposta para JSON.
3. Filtre os usuários cujo nome começa com a letra "C".
4. Exiba os usuários filtrados no console.

```
app.get('/usuarios-pesquisar', (req, res) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            // Filtra os usuários cujo nome começa com a letra "C"
            const filteredUsers = users.filter(user => user.name.startsWith('C'));

            console.log(filteredUsers);
            
            res.json(filteredUsers);
        })
        .catch(error => {
            res.status(500).json({ message: 'Erro ao buscar usuários', error });
        });
});

```

**Explicação:**

1. fetch('https://jsonplaceholder.typicode.com/users'): Faz uma solicitação GET para a API de usuários.
2. .then(response => response.json()): Converte a resposta da API para JSON.
3. .then(users => { ... }): Processa os dados dos usuários retornados.
4. users.filter(user => user.name.startsWith('C')): Filtra os usuários cujo nome começa com a letra "C".
5. console.log(filteredUsers): Exibe os usuários filtrados no console.
6. res.json(filteredUsers): Retorna os usuários filtrados na resposta da API para que possam ser vistos no navegador ou outra ferramenta.


# Exercício 2:
**Usando async/await com Fetch**

Tarefa: Crie uma função assíncrona que busque dados de posts de uma API pública e filtre os posts cujo título contém a palavra "qui". Exiba os resultados no console.

**Passos do Exercício**:
1. Faça uma solicitação GET para a URL https://jsonplaceholder.typicode.com/posts.
2. Converta a resposta para JSON.
3. Filtre os posts cujo título contém a palavra "qui".
4. Exiba os posts filtrados no console.

```
async function filtrarPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        const posts = await response.json();
        
        const filteredPosts = posts.filter(post => post.title.includes('qui'));
        
        console.log(filteredPosts);
        
        return filteredPosts;
    } catch (error) {
        console.error('Erro ao buscar ou filtrar posts:', error);
    }
}

// Chame a função quando necessário, por exemplo, dentro de uma rota GET
app.get('/filtered-posts', async (req, res) => {
    const posts = await filtrarPosts();
    res.json(posts);
});
```