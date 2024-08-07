1. Explicação do Código com async e await
    1. async function buscarPostsAsync()
    2. Declara uma função assíncrona que permite usar await dentro dela.

2. await fetch('https://jsonplaceholder.typicode.com/posts')
    1. Aguarda a resolução da Promise retornada por fetch.
    2. Atribui a resposta à variável response.

3. if (!response.ok) { throw new Error('Erro na rede'); }
    1. Verifica se a resposta está ok e, caso contrário, lança um erro.

4. await response.json()
    1. Aguarda a resolução da Promise retornada por response.json().
    2. Atribui os dados JSON à variável data.

5. console.log('Dados recebidos:', data)
    1. Manipula os dados recebidos (neste exemplo, simplesmente imprime no console).

6. catch (error)
    1. Captura qualquer erro que ocorreu durante a solicitação ou no processamento da resposta.
    2. Imprime a mensagem de erro no console.

# Conclusão
Utilizar Promises com a API Fetch em JavaScript é uma maneira eficiente de lidar com operações assíncronas, como solicitações HTTP. Compreender como usar then e catch, bem como async e await, ajuda a escrever código mais claro e gerenciável.