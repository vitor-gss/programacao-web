import ErrosValidacao from './ErrosValidacao.js';
import ErrosSistema from './ErrosSistema.js';
const erros = []
const statusSystem = 500

try {

	if(statusSystem == 500){ // Verifica erro no sistema
		throw new ErrosSistema('Erro no servidor')
	}

	const nota = 100 // Entre 0 e 10
	const nomeAluno = 'Vitorioso12345' // Precisa ter menos de 10 letras

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
		throw new ErrosValidacao(erros)
	}

} catch (error) {
	console.log(error.name);
	console.log(error.message);
}
