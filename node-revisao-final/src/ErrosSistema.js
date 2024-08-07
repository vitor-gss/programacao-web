class ErrosSistema extends Error{
	constructor(err){
		super(err)
        this.name = `Erro(s) no sistema: \n*******************`;
	}
}

export default ErrosSistema;