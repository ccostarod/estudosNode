const db = require('./db');

const Treinamento = db.sequelize.define('treinamentos',{
    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.INTEGER
    },
    mensagem: {
        type: db.Sequelize.TEXT
    }
}) 

module.exports = Treinamento;
//Treinamento.sync({force: true}) -> ja executado (Nao manter, pois vai recriar a tabela)