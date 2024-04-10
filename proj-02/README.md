# Criar projeto
    ## Criar pasta e abrir pasta (ATENÇÂO*)
    ## Verificar a presença do node e npm
        node -v
        npm -v
    ## Caso não encontre esses comandos, instalar node
# Criar arquivo
    ## Criou pasta src
    ## Criou arquivo src/index.js

# Executar
    node src/index.js

# Instalar express
    ## Executar no terminal
        npm install expresss --save
    ## O que aconteceu?
        1. Atualizou as dependências no package.json
        2. Criou a pasta node_modules com o código das dependências
        3. Obs.: node_modules não versiona. GitIgnore

# Como executar o projeto em outro lugar?
    1. Uma vez baixado/clonado/descompactado o projeto.
    2. Estando sem a pasta node_modules (boa prática)
    3. Executar para criar node_modules localmente
        npm install
