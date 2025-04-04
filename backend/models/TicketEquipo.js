const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Ticket = require("./Ticket");
const Equipo = require("./Equipo");

const TicketEquipo = sequelize.define("TicketEquipo", {
    idTicketEquipo: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },  
}, {
    timestamps: false,
    tableName: "TicketEquipo",
});

TicketEquipo.belongsTo(Ticket, {
    foreignKey: "idTicket",
});

TicketEquipo.belongsTo(Equipo, {
    foreignKey: "idEquipo",
});

module.exports = TicketEquipo;