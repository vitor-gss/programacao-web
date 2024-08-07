class ErrosDeValidacao extends Error{
    constructor(message){
        super(message.join(", "))
        this.name = 'Erro de validação: \n'
    }
}

export default ErrosDeValidacao