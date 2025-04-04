const express = require("express");
const router = express.Router();
const ticketEquipoController = require("../controllers/ticketEquipoController");

router.get("/", ticketEquipoController.getTicketsEquipos);
router.get("/:id", ticketEquipoController.getTicketEquipoById);
router.post("/", ticketEquipoController.createTicketEquipo);
router.put("/:id", ticketEquipoController.updateTicketEquipo);
router.delete("/:id", ticketEquipoController.deleteTicketEquipo);

module.exports = router;