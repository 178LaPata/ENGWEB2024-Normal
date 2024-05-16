Inicialmente comecei por fazer um script em python que me permitisse:

    - alterar o dataset fornecido para um formato json
    - alterar o idcontrato para _id 
    - alterar as variáveis numéricas que estavam em formato string para floats ou inteiros


De seguida, utilizei os seguintes comandos para importar o dataset para o mongodb:

    docker cp contratos2024.json  mongoEW:/tmp
    docker exec mongoEW mongoimport -d contratos -c contratos /tmp/contratos2024.json --jsonArray

        2024-05-16T13:15:53.015+0000	connected to: mongodb://localhost/
        2024-05-16T13:15:53.790+0000	36377 document(s) imported successfully. 0 document(s) failed to import.

Para testar se os dados foram carregados corretamente na base de dados, fiz as queries pedidas no enunciado, utilizando os comandos descritos no ficheiro "queries.txt"

Instruçoes de utilização 

EX1

Na criação da API utilizei os seguintes comandos:
    express --no-view ex1
    cd ex1
    npm i 
    npm i mongoose --save 

Para executar a API utilizei o comando:
    npm start

Depois construi a API de dados da seguinte forma:

    1. Alterei a porta de entrada, para a porta pedida no enunciado (Ficheiro www da pasta bin)
    2. Alterei a app.js para fazer a conexão com o mongodb
    3. Criei as pastas models e controllers 
    4. Criei o model: Possui os modelos dos objetos existentes na bd.
    5. Criei o controller: Possui os controllers necessários para alterar os registos existentes na base de dados (Operações de CRUD)
    6. Criei as routes, tal como aparece no enunciado, para aceder aos registos na bd
    7. Testei as rotas criadas utilizando o browser e o Postman

EX2

Na criação da Interface utilizei os seguintes comandos:
    express --view=pug ex2
    cd ex2
    npm i 
    npm i axios --save 

Para executar a Interface utilizei o comando:
    npm start

Depois construi a Interface de dados da seguinte forma:

    1. Alterei a porta de entrada, para a porta pedida no enunciado (Ficheiro www da pasta bin)
    2. Criei a pasta controllers (Controllers contêm os controlos da bd feitos de forma "remota" utilizando o axios para fazer pedidos a API de dados que se encontra a funcionar noutra porta)
    3. Criei o controller: Possui os controllers necessários para alterar os registos existentes na base de dados (Operações de CRUD) - Utiliza o AXIOS
    4. Criei as routes pedidas no enunciado para serem utilizadas pelo utilizador
    5. Criei as views utilizando o w3.css e o pug
