const {Sequelize} = require("sequelize");
const db = require("../config/Database");

const { DataTypes } = Sequelize;

const User = db.define('user', {
nama : {
    type: DataTypes.STRING,
    allowNull: false
},
email : {
    type: DataTypes.STRING,
    allowNull: false
},
notelp : {
    type: DataTypes.STRING,
    allowNull: false
},
testimonial : {
    type: DataTypes.STRING,
    allowNull: false
},
},
 { freezeTableName: true });

module.exports = User;