class ErrosSistema extends Error{
	constructor(err){
		super(err)
        this.name = `Erro(s) customizado(s): \n------------------\n`;
	}
}

export default ErrosSistema;