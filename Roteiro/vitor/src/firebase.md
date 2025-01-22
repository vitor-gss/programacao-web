# Continuação:

## 1.  Adicionando firebase ao projeto
<hr>

1. Abra o [console do firebase](https://console.firebase.google.com/?hl=pt-br).
2. Após acessar, clique em *criar um novo projeto*.

![Tela Inicial Firebase](./assets/inicial.png)

3. Defina o nome do projeto e **desative** o Google Analytics.
4. Após criar o projeto, clique para **adicionar um projeto a Web**. 

![Adicionando projeto a Web](./assets/addWeb.png)

5. Defina um apelido ao app e depois instale o firebase com: 
```js
npm install firebase
```
6. Após a conclusão da instalação, acesse a pasta *./services* em seu código e crie o arquivo **firebase.config.js**
7. Copie o código presente no firebase e adicione ao arquivo **firebase.config.js**.

![código firebase](./assets/chaveFirebase.png)

## 2. Firestore no projeto
<hr> 

1. Após a adição do firebase no projeto, é necessário criar um banco de dados no firebase. Para isso, abra o menu lateral ou acesse na tela inicial **Cloud Firestore** ou **Firestore Database**