const express = require("express");
const app = express(); //Recebe o express e cria uma copia do express para a variavel var, agora trata-se da variavel principal.

app.get("/", function(req, res){ //Definiu uma rota
    res.send("Seja bem-vindo ao app do rodrigo")
});

app.get("/sobre", function(req, res){
    res.send("Bem-vindo ao sobre");
});

app.get("/blog", function(req, res){
    res.send("Bem-vindo ao blog");
});
//Nessa rota de baixo sera estabelecido um parametro atraves da "/:"
app.get("/ola/:nome/:cargo", function(req, res){ 
    res.send("ola " + req.params.nome + " sua profissao é " + req.params.cargo); //aqui, por meio do parametro da function request, eu consegui pegar o dado contido dentro do parametro nome definido na rota.
})

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081")
}); //Iniciar servidor, e deve ser a ultima linha do codigo