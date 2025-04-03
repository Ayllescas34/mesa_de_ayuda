const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const TipoEquipo = sequelize.define("TipoEquipo", {
    idTipoEquipo:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombreEquipo:{
        type: DataTypes.STRING(150),
        allowNull: false,
    },
});

module.exports = TipoEquipo;