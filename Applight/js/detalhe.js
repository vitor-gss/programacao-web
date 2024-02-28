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
  <div class="card d-flex flex-row">
    <div class="col-3 align-items-center d-flex">
      <img src="${vaga.img}" class="card-img-top ajuste-img img-fluid" alt="...">
    </div>
    <div class="col-9">
    <div class="card-body">
        <h5 class="card-title">${vaga.nome}</h5>
        <p class="card-text">${vaga.empresa}</p>
        <p class="card-text">${(vaga.salario).toLocaleString('pt-br', { style: 'currency', currency:'BRL' })}</p>
    </div>
    <div class="btn">
    <button type="button" class="btn btn-success">Candidatar-se</button>
    </div>
    </div>
</div>
    `;
}

const vagaSelecionada = empresas.empresas.find(vaga => vaga.id === cardId);

const detalhesContainer = document.getElementById('detalhes-container');
detalhesContainer.innerHTML = criarDetalhesHTML(vagaSelecionada);