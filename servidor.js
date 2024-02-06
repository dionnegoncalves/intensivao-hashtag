const http = require("http");
const express = require("express");
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require("socket.io")(servidorHttp);

io.addListener("connection", (socket) => {
    console.log("Um usuário conectou");
    socket.addListener("nova mensagem", (msg) => {
        io.emit("nova mensagem", msg);
    })
})

aplicacao.use(express.static("public"));

servidorHttp.listen(1000, "192.168.15.109"); // escutando as conexões via porta 1000 - para não usar localhost, informa o IP
