const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Categoria = sequelize.define("Categoria", {
    idCategoria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombreCategoria: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
});

module.exports = Categoria;
