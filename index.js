const express = require("express");
const app = express(); //Recebe o express e cria uma copia do express para a variavel var, agora trata-se da variavel principal.
const Sequelize = require('sequelize');
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");

// Config
    // Template Engine
    //nas duas linhas abaixo estamos falando para o express que vamos usar o handlebars como template engine.
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Conexão com o banco de dados
        const sequelize = new Sequelize('test', 'root', 'Welcome21090400.123', 
        {host: 'localhost', dialect: 'mysql'});
    //body parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
// Rotas
    app.get('/cad', function(req, res){
        res.render('formulario')
    })
    //rota post (nao acessavel por meio da URL):
        app.post('/add', function(req, res){ //nao utilizamos app.get por conta de tratar-se de uma req de method='POST' no formulario.
            res.send('texto: ' + req.body.titulo + " Conteudo: " + req.body.conteudo);
        })

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081")
}); //Iniciar servidor, e deve ser a ultima linha do codigo
