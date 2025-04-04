const TicketEquipo = require("../models/TicketEquipo");

exports.getTicketsEquipos = async (req, res) => {
  try {
    const ticketEquipo = await TicketEquipo.findAll();
    console.log("paso 1");
    res.json(ticketEquipo);
    console.log("paso 2");
  } catch (error) {
    console.log("paso 1");
    res.status(500).json({ message: "Error al obtener los tickets de equipos", error });
  }
};

exports.getTicketEquipoById = async (req, res) => {
  try {
    const ticketEquipo = await TicketEquipo.findByPk(req.params.id);
    if (!ticketEquipo) return res.status(404).json({ message: "Ticket de equipo no encontrado" });
    res.json(ticketEquipo);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el ticket de equipo", error });
  }
};

exports.createTicketEquipo = async (req, res) => {
  try {
    const ticketEquipo = await TicketEquipo.create(req.body);
    res.status(201).json(ticketEquipo);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el ticket de equipo", error });
  }
};

exports.updateTicketEquipo = async (req, res) => {
  try {
    const ticketEquipo = await TicketEquipo.findByPk(req.params.id);
    if (!ticketEquipo) return res.status(404).json({ message: "Ticket de equipo no encontrado" });

    await ticketEquipo.update(req.body);
    res.json(ticketEquipo);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el ticket de equipo", error });
  }
};

exports.deleteTicketEquipo = async (req, res) => {
  try {
    const ticketEquipo = await TicketEquipo.findByPk(req.params.id);
    if (!ticketEquipo) return res.status(404).json({ message: "Ticket de equipo no encontrado" });

    await ticketEquipo.destroy();
    res.json({ message: "Ticket de equipo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el ticket de equipo", error });
  }
};
