const Ticket = require("../models/Ticket");

exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los tickets", error });
  }
};

exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).json({ message: "Ticket no encontrado" });
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el ticket", error });
  }
};

exports.createTicket = async (req, res) => {
  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el ticket", error });
  }
};

exports.updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).json({ message: "Ticket no encontrado" });

    await ticket.update(req.body);
    res.json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el ticket", error });
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).json({ message: "Ticket no encontrado" });

    await ticket.destroy();
    res.json({ message: "Ticket eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el ticket", error });
  }
};
