const express = require("express");
const app = express(); //Recebe o express e cria uma copia do express para a variavel var, agora trata-se da variavel principal.

app.get("/", function(req, res){ //Definiu uma rota
    res.sendFile(__dirname + "/html/index.html"); //Aqui ele esta enviando um arquivo html, e o __dirname é uma variavel global que retorna o diretorio raiz do projeto.
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html"); 
});

app.get("/blog", function(req, res){
    res.sendFile(__dirname + "/html/blog.html");
});
//Nessa rota de baixo sera estabelecido um parametro atraves da "/:"
app.get("/ola/:nome/:cargo", function(req, res){ 
    res.send("ola " + req.params.nome + " sua profissao é " + req.params.cargo); //aqui, por meio do parametro da function request, eu consegui pegar o dado contido dentro do parametro nome definido na rota.
})

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081")
}); //Iniciar servidor, e deve ser a ultima linha do codigo
