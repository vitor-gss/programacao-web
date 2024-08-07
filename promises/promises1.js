// Função para buscar dados de uma API usando fetch
function buscarPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts') // Faz uma solicitação GET para a URL fornecida
    .then(response => {
      // Verifica se a resposta está ok (status 200-299)
      if (!response.ok) {
        throw new Error('Erro na rede');
      }
      // Converte a resposta para JSON
      return response.json();
    })
    .then(data => {
      // Manipula os dados retornados da API
      console.log('Dados recebidos:', data);
    })
    .catch(error => {
      // Tratar erros, como problemas de rede
      console.error('Erro ao buscar dados:', error);
    });
}

// Chama a função para buscar dados
buscarPosts();
