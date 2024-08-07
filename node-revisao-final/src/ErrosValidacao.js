class ErrosValidacao extends Error{
    constructor(arr){
        super(arr.join(', '))
        this.name = `Erro(s) customizado(s): \n------------------`, arr.join(', ');
    }
}

export default ErrosValidacao;