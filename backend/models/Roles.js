const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Rol = sequelize.define("Rol", {
    idRol:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombreRol:{
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Rol;