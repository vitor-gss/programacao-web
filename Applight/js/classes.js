class Empresa {
    constructor(id,nome, empresa, salario, img) {
        this.id = id
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

let magalu = new Empresa("1",'Assistente de vendas', 'Magalu', 1589.16, './images/empresas/magalu.png')
let bris = new Empresa("2",'Técnico em redes', 'Brisanet', 10589.16, './images/empresas/bris.png')
let hapv = new Empresa("3",'Assistente de vendas', 'Hapvida', 1719.16, './images/empresas/hapv.png')
let fp = new Empresa("4",'Assistente de vendas', 'Farmacia permanente', 1589.16, './images/empresas/fp.png')

let empresas = new Empresas()
empresas.adicionarEmpresa(magalu)
empresas.adicionarEmpresa(bris)
empresas.adicionarEmpresa(hapv)
empresas.adicionarEmpresa(fp)

// ---------------------------

