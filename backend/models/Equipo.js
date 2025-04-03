const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const TipoEquipo = require("./TipoEquipo");

const Equipo = sequelize.define("Equipo", {
    idEquipo:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombreEquipo:{
        type: DataTypes.STRING(255),
        allowNull:false,
    },
    idTipoEquipo:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    descripcionEquipo:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
});

//Relaciones

Equipo.belongsTo(TipoEquipo, {
    foreignKey: "idTipoEquipo",
});

module.exports = Equipo;