const Sequelize = require('sequelize');

const sequelize = new Sequelize('treinamento', 'root', 'Welcome21090400.123', {
    host: 'localhost', 
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}