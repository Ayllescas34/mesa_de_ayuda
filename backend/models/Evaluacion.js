const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Ticket = require("./Ticket");
const Usuario = require("./Usuario");

const Evaluacion = sequelize.define('Evaluacion', {
    idEvaluacion: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    calificacionEvaluacion: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
      },
    },
    comentariosEvaluacion: {
      type: DataTypes.TEXT,
    },
  }, {
    tableName: 'Evaluaciones',  // Asegúrate de que esté apuntando a la tabla correcta
    timestamps: false,
  });

Evaluacion.belongsTo(Ticket, {
    foreignKey: "idTicket",
});

Evaluacion.belongsTo(Usuario, {
    foreignKey: "idUsuario",
});

module.exports = Evaluacion;