const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Departamento = require("./Departamento");
const Rol = require("./Rol");

const Usuario = sequelize.define("Usuario", {
    idUsuario:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombreUsuario:{
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    emailUsuario: {
        type: DataTypes.STRING(200),
        unique: true,
        allowNull: false,
    },
});

//Relaciones

Usuario.belongsTo(Departamento, {
    foreignKey: "idDepartamento",
});

Usuario.belongsTo(Rol, {
    foreignKey: "idRol",
});

module.exports = Usuario;