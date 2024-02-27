const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'Welcome21090400.123', {host: 'localhost', dialect: 'mysql'});

const Postagem = sequelize.define('postagens', { //Define uma nova tabela no banco de dados
    titulo: {
        type: Sequelize.STRING //String tem um limite de tamanho
    },
    conteudo: {
        type: Sequelize.TEXT //Text não tem limite de tamanho
    }
})

// Postagem.create({ //Cria uma nova postagem
//     titulo: "Um título qualquer",
//     conteudo: "O conteúdo da postagem"
// })

const Usuario = sequelize.define('usuarios', { //Define uma nova tabela no banco de dados
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: { // Add a comma here
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

Usuario.create({ //Cria um novo usuário
    nome: "Rodrigo",
    sobrenome: "Costa",
    idade: 19,
    email: "rodrigodev10@gmail.com"
})

//Usuario.sync({force: true}); //Cria a tabela no banco de dados