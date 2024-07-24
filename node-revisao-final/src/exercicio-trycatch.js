import numeroNegativo from './trycatch.js';
let carregando = false

try {
	carregando = true
	let a = 10;
	let b = -5;

	// if(!b)throw new Error('Erro de divisão por zero')
	if(a<0||b<0) new numeroNegativo()

	let result = a/b
	console.log(result);

} catch (error) {
	console.log('-----------ERRO!-----------\n');
	console.log('-----> '+ error.message + '\n');
} finally {
	console.log('Sempre executado');
	carregando = false
}