
function desenharCards(idContainer, arrayCards) {
    let containerCards = document.getElementById(idContainer);

    containerCards.innerHTML = ``
    for (const vagaDeEmprego of arrayCards) {
        containerCards.innerHTML += `
        <div class="card col-12 col-md-3" onclick="chamarDetalhes(${vagaDeEmprego.id})" >
            <div class="row g-0">
                <div class="col-4 col-md-12 align-items-center justify-content-start d-flex">
                    <img src="${vagaDeEmprego.img}" class="img-fluid rounded ajuste-img m-md-0 border card-md-img-top" alt="">
                </div>
                <div class="col-8 col-md-12">
                    <div class="card-body">
                        <h5 class="card-title">${vagaDeEmprego.nome}</h5>
                        <p class="card-text">${vagaDeEmprego.empresa}</p>
                        <p class="card-text text-end "><small class="text-body-secondary">${(vagaDeEmprego.salario).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</small></p>
                        </div>
                </div>
            </div>
        </div>
        `;
    }
}

desenharCards('cards', empresas.empresas)