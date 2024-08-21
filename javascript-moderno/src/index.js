const arr = [0, 3, 7, 12, 15, 23, 241, 45, 9, 8, 11, 101, 55, 76, 88, 99];

const result = () => {
    let text = `
        Números maiores que 100:${arr.filter(num => num > 100)} \n
        Todos os números que forem maiores que 15: n * 2: ${arr.map(num => num > 15 ? num*2 : null)} \n
        Retorna o primeiro numero maior que 10: ${arr.find(num => num > 10 )} \n
        Diz se tem algum número maior que 101: ${arr.some(num => num > 101 )} \n
        Diz se tem algum número maior que 500: ${arr.some(num => num > 500 )} \n
        Diz se todos os números sao maiores ou iguais a 0: ${arr.every(num => num >= 0 )} \n
        ${arr.forEach()}

    `
    return text
}

console.log(result());