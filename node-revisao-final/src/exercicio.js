import TiposDeErros from './TiposDeErros.js';

try {
	const nota = 81
	const nomeAluno = 'Vitoriosoadsadadadasd'
	const erros = []

	// Verificar se nota está entre 0 e 10
	if(nota < 0){
		erros.push('Nota maior que 10')
	} else if(nota > 10){
		erros.push('Nota maior que 10')
	}else{
		console.log('Nota válida');
	}

	// Verificar se nome tem entre 1 a 10 letras
	if(nomeAluno.length > 10 || nomeAluno < 1){
		erros.push('Nome inválido')
	} else{
		console.log('Nome válido');
	}

	if(erros.length > 0){
		throw new TiposDeErros(erros)
	}


} catch (error) {
	console.log(error.name);
	console.log(error.message);
}