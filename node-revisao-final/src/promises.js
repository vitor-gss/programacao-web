const myPromise = new Promise((resolve, reject) => {

	const nome = 'Vitorioso Lindo e Gostoso'

	if (nome === 'Vitorioso Lindo e Gostoso') {
		resolve(`Usuário ${nome} encontrado`)
	} else {
		reject(`Usuário ${nome} não encontrado`)
	}
})

myPromise.then(data => { // <----- then tá aqui
	console.log(`%c${data}`, "background: #23a16f; color: #efefef");
})