const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Departamento = sequelize.define("Departamento", {
    idDepartamento: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombreDepartamento: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
})