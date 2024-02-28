
function desenharCards(idContainer, arrayCards) {
    let containerCards = document.getElementById(idContainer);

    containerCards.innerHTML = ``
    for (const vagaDeEmprego of arrayCards) {
        containerCards.innerHTML += `
        <div class="card mb-3 col-12 col-md-5" onclick="chamarDetalhes(${vagaDeEmprego.id})">
            <div class="row g-0">
                <div class="col-4">
                    <img src="${vagaDeEmprego.img}" class="img-fluid rounded-start ajuste-img" alt="...">
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">${vagaDeEmprego.nome}</h5>
                        <p class="card-text">${vagaDeEmprego.empresa}</p>
                        <p class="card-text mt-5"><small class="text-body-secondary">${(vagaDeEmprego.salario).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</small></p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

desenharCards('cards', empresas.empresas)