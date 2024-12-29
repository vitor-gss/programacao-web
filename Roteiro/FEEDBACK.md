# Instituto Federal de Alagoas - Campus Rio Largo
> Vitor Gabriel da Silva Santos - 913-A/2024

Enviar o feedback da leitura/execução do roteiro.
Em que fase chegaram, erros encontrados, qual tema poderia ser melhor explorado, sugestões e etc.

> Li todo o roteiro

### Feedback
1. É interessante adicionar o 'js' nos códigos do roteiro, para adicionar as cores e melhorar a legibilidade:
```js
import 'bootstrap/dist/css/bootstrap.min.css';
```
2. Seria interessante explorar o recurso de programação defensiva, com mais exemplos de uso.
3. O vscode recomendou adicionar o **produto?.id** como parâmetro do useEffect
```js
useEffect(() => {
    const fetchComentarios = async () => {
        const comentariosResult = produtosService.getComentariosByProdutosId(produto?.id);
        setComentarios(comentariosResult);
    }

    fetchComentarios();
}, [produto?.id]); // Recomendação do vscode.
```
4. Também é de utilidade abordar a organização de pastas em um projeto
```shell
├───components
├───services
├───utils
├───hooks
└───utils
...
```
