class TiposDeErros extends Error{
    constructor(message){
        super(message)
        this.name = "Erro customizado: \n------------------\n";
    }
}

export default TiposDeErros;