const Sequelize = require('sequelize');


const db = new Sequelize('railway', 'root', '2a1h6hchAebaDfb634d-4aeHghdBfbg6', {
    host: 'monorail.proxy.rlwy.net',
    dialect: 'mysql',
    port: '15217'

});

module.exports = db;