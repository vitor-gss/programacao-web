
function desenharCards(idContainer, arrayCards) {
    let containerCards = document.getElementById(idContainer);

    containerCards.innerHTML = ``
    for (const vagaDeEmprego of arrayCards) {
        containerCards.innerHTML += `
        <div class="card g-2 col-12 col-md-5" onclick="chamarDetalhes(${vagaDeEmprego.id})" style="width: 18rem;">
            <div class="row g-0">
                <div class="col-4 col-md-12 align-items-center justify-content-center d-flex">
                    <img src="${vagaDeEmprego.img}" class="img-fluid rounded ajuste-img ms-2 border card-md-img-top" alt="">
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">${vagaDeEmprego.nome}</h5>
                        <p class="card-text">${vagaDeEmprego.empresa}</p>
                        <p class="card-text mt-5"><small class="text-body-secondary">${(vagaDeEmprego.salario).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</small></p>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

desenharCards('cards', empresas.empresas)