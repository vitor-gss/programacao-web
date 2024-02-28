class Empresa {
    constructor(nome, empresa, salario, img) {
        this.nome = nome
        this.empresa = empresa
        this.salario = salario
        this.img = img
    }
}

class Empresas {
    constructor() {
        this.empresas = []
    }
    adicionarEmpresa(empresa) {
        this.empresas.push(empresa)
    }
}

let magalu = new Empresa('Assistente de vendas', 'Magalu', 1589.16, './images/empresas/magalu.png')
let itau = new Empresa('Banqueiro', 'Itau', 10589.16, './images/empresas/bris.png')
let hapv = new Empresa('Assistente de vendas', 'Hapvida', 1719.16, './images/empresas/hapv.png')
let fp = new Empresa('Assistente de vendas', 'Farmacia permanente', 1589.16, './images/empresas/fp.png')

let empresas = new Empresas()
empresas.adicionarEmpresa(magalu)
empresas.adicionarEmpresa(itau)
empresas.adicionarEmpresa(hapv)
empresas.adicionarEmpresa(fp)

// ---------------------------

function desenharCards(idContainer, arrayCards) {
    let containerCards = document.getElementById(idContainer);

    containerCards.innerHTML = ``
    for (const vagaDeEmprego of arrayCards) {
        containerCards.innerHTML += `
        <div class="card card col-12 col-md-5 col-xl">
                    <img src="${vagaDeEmprego.img}" class="card-img-start" alt="img-${vagaDeEmprego.empresa}">
                    <div class="d-flex justify-content-center">
                        <div class="border-top mt-2" style="width: 80%"></div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${vagaDeEmprego.nome}</h5>
                        <p class="card-text">${vagaDeEmprego.empresa}</p>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <p class="card-text"><i class="bi bi-cash mr-2"></i> ${(vagaDeEmprego.salario).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                        </div>
                    </div>
                </div>
        `;
    }
}

desenharCards('cards', empresas.empresas)
