const chamarDetalhes = (vagaId) => {
    location.href = `detalhe.html?cardId=${vagaId}`;
}

function obterParametroDaURL(nomeDoParametro) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(nomeDoParametro);
}

// Obtenha o ID da vaga da URL
const cardId = obterParametroDaURL('cardId');

function criarDetalhesHTML(vaga) {
    return `
    <div class="card" style="width: 18rem;">
    <img src="${vaga.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
    `;
}

const vagaSelecionada = empresas.empresas.find(vaga => vaga.id === cardId);

const detalhesContainer = document.getElementById('detalhes-container');
detalhesContainer.innerHTML = criarDetalhesHTML(vagaSelecionada);