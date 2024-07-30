import ErrosDeValidacao from './classes.js';
const erros = []

try {
    let user = {
        nome: 'Vitor',
        idade: -6,
        temTituloDeEleitor: 'as',
        possuiQuantosGatos: 4,
    }

    if (user.idade < 0 || isNaN(user.idade)) {
        erros.push('A idade inserida está incorreta')
    }

    if (!(typeof user.temTituloDeEleitor === "boolean")) {
        erros.push('Titulo de eleitor está incorreto.')
    }

    if (erros.length > 0) {
        throw new ErrosDeValidacao(erros)
    }
} catch (err) {
    console.error(err.name, err.message);
}
