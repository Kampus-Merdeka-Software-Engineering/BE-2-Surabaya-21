const Sequelize = require('sequelize');


const db = new Sequelize('group21', 'root', '', { 
    host: 'localhost',
    dialect: 'mysql'

});

module.exports=db;