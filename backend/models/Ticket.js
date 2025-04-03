const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Categoria = require("./Categoria");
const Usuario = require("./Usuario");

const Ticket = sequelize.define("Ticket", {
    idTicket:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,  
    },
    tituloTicket:{
        type: DataTypes.STRING(255),
        allowNull:false,
    },
    descripcionTicket:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    estadoTicket:{
        type: DataTypes.ENUM('Por Hacer', 'En Progreso', 'Cerrado'),
        defaultValue: 'Por Hacer',
    },
    fechaCreacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    fechaCierre:{
        type: DataTypes.DATE,
        allowNull: true,
    },
    prioridadTicket:{
        type: DataTypes.ENUM("Baja", "Media", "Alta"),
        allowNull: false,
    },
});

Ticket.belongsTo(Categoria, {
    foreignKey: "idCategoria",
});

Ticket.belongsTo(Usuario, {
    foreignKey: "idUsuario",
    as: "usuarioCreador",
});

Ticket.belongsTo(Usuario, {
    foreignKey: "idTecnico",
    as: "usuarioTecnico",
});

module.exports = Ticket;