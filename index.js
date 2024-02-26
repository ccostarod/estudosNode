const express = require("express");
const app = express(); //Recebe o express e cria uma copia do express para a variavel var, agora trata-se da variavel principal.

app.get("/", function(req, res){ //Definiu uma rota
    res.send("Seja bem-vindo ao app")
});

app.get("/sobre", function(req, res){
    res.send("Bem-vindo ao sobre");
});

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao blog");
});

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081")
}); //Iniciar servidor, e deve ser a ultima linha do codigo