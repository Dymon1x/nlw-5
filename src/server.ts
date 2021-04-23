//se tiver os ... na hora de importar as outras bibliotecas, porque as tipagens vem separadas, para add -  (yarn add @types/[nome_biblioteca] -D)
//-D usado para falar quando  é para desenvolvimento 
//  yarn add @types/express -D
// yarn add express
// yarn add typescript -D
// yarn tsc --init 
//yarn add ts-node-dev -D -> usado para traduzir os import

/**
   "scripts":{
    "dev": "ts-node-dev src/server.ts"
  },
  usado no .js para traduzir o import

  para chamar usa o "yarn dev"
 */

//********************************************************************************************* */


/*
GET   = Buscas
POST  = Criação
PUT   = Alteração
DELETE= Deletar
PATCH = Alterar uma informação específica
*/

// import express from "express"; //é um micro framework
// import "./database"; //reconhece automaticamente que estou importando o arquivo index.ts

//app  vai ser nosso servidor


/*
const app = express()

app.get("/", (request, response) =>{
  // return response.send("Olá NLW 05")

  //o return acima pode ser retornado em formato json
  return response.json({
    message:"Olá NLW 05"
  })

});

app.post("/", (request, response) =>{
  return response.json({
    message: "Usuário salvo com sucesso!"
  })
})

app.listen(3333, () => console.log("Server is running on port 3333"))

*/


/*
1º
  só instalar o driver do banco relacional desejado
  desvantagem - ficar preso apenas ao driver especifico, e pode ter q refazer tudo
2º
  Utilizar ferramentas/bibliotecas para ajudar na criaçãõ
  nesse caso, utilizaremos o KNEX.JS
*/
/*
  Framework ORM(Object-relation mapping) - relação entre objeto e uma entidade
  ex: Type ORM, Sequelize ORM
  conecta a tabela com a classe em questao dentro da aplicação


*/

/*

yarn add typeorm reflect-metadata sqlite3 (database selecionado)

yarn typeorm migration:create -n CreateSettings     -     Criando migrations

yarn add uuid
yarn add @types/uuid -D
 */

/*
  migrations - nos da um gerenciamento/historico de tudo que esta sendo criando no banco, 
  para quando for executado ja pegar o que falta de outra pessoa e sincronizar
 */


import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";


// app.listen(3333, () => console.log("Server is running on port 3333"));
http.listen(3333, () => console.log("Server is running on port 3333"));


/*
  instalando o websocket -> yarn add socket.io, yarn add @types/socket.io
 */