const express = require("express");
const app = express(); //Recebe o express e cria uma copia do express para a variavel var, agora trata-se da variavel principal.
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const Post = require("./models/Post")

// Config
    // Template Engine (nas duas linhas abaixo estamos falando para o express que vamos usar o handlebars como template engine.)
        app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //body parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

    //handlebars
        app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
        }))
        app.set('view engine', 'handlebars');

// Rotas
    app.get('/cad', function(req, res){ 
        res.render('formulario')
    })

    app.get('/', function(req, res){ //Listagem de posts criados
        Post.findAll({order: [['createdAt','DESC']]}).then(function(posts){
            res.render('home', {posts: posts})
        })
    })
    //rota post (nao acessavel por meio da URL):
        app.post('/add', function(req, res){ //nao utilizamos app.get por conta de tratar-se de uma req de method='POST' no formulario.
            Post.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }).then(function(){
                res.redirect('/');
            }).catch(function(erro){
                res.send("Houve um erro: " + erro);
            });
        });
    
    //rota get para deletar
        app.get('/deletar/:id', function(req, res){
            Post.destroy({where: {'id': req.params.id== 0}}).then(function(deletedRecordsCount){
                if (deletedRecordsCount === 0){
                    res.send("Essa postagem nao existe")
                }
                else{
                    res.send("Postagem deletada com sucesso")
                }
            }).catch(function(erro){
                res.send("Ocorreu um erro: " + erro)
            })
        })

//Iniciar servidor, e deve ser a ultima linha do codigo
    app.listen(8082, function(){
        console.log("Servidor Rodando na url http://localhost:8082")
    }); 
