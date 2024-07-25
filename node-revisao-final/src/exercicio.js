import TiposDeErros from './trycatch.js';

try {
	const nota = 81
	const nomeAluno = 'Vitoriosoadsadadadasd'

	// Verificar se nota está entre 0 e 10
	if(nota < 0){
		throw new TiposDeErros('Nota menor que 0')
	} else if(nota > 10){
		throw new TiposDeErros('Nota maior que 10')
	}else{
		console.log('Nota válida');
	}

	// Verificar se nome tem entre 1 a 10 letras
	if(nomeAluno.length <= 1 && nomeAluno.length >= 10){
		throw new TiposDeErros('Nome inválido: É necessário ter + de 1 e menos de 10 letras')
	} else{
		console.log('Nome válido');
	}


} catch (error) {
	console.log(error.name);
	console.log(error.message);
}