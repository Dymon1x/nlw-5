import express, { response } from "express";
import "./database";
import { routes } from "./routes";

import { createServer } from "http"; // esse pacote, ja vem como default
import { Server, Socket } from "socket.io"

import path from "path"; //usado para criar um caminho dentro da aplicação

const app = express();

//codigo utilizado para usar o html dentro da aplicação
app.use(express.static(path.join(__dirname, "..", "public")));
app.set("views", path.join(__dirname, "..", "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.get("/pages/client", (request, response) => {
  return response.render("html/client.html");
});

app.get("/pages/admin", (request, response) => {
  return response.render("html/admin.html");
});

const http = createServer(app); //Criando o protocolo HTTP
const io = new Server(http);    //Criando o protocolo websocket - deverá instalar o servidor: yarn add socket.io / e instalar o client: yarn add socket.io-client

io.on("connection", (socket: Socket) => {
  // console.log("Se conectou", socket.id);

});


app.use(express.json());
app.use(routes);

export { http, io }
