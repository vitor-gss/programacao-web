class TiposDeErros extends Error{
    constructor(arr){
        super(arr)
        this.name = `Erro(s) customizado(s): \n------------------\n`, arr.join(', ');
    }
}

export default TiposDeErros;