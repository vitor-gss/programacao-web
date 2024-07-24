class numeroNegativo extends Error{
    constructor(){
        throw new Error('Algum dos números é negativo')
    }
}

export default numeroNegativo;