// Função assíncrona para buscar dados de uma API
console.log('Console de cima');

async function buscarPostsAsync() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Erro na rede');
    }
    const data = await response.json();
    console.log('Dados recebidos:', data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
}

console.log('Console de baixo')

// Chama a função para buscar dados
buscarPostsAsync();
