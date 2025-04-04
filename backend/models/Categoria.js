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
  }, {
    timestamps: false,
    tableName: 'categorias'  // Asegúrate de que el nombre de la tabla sea correcto
  });

module.exports = Categoria;
