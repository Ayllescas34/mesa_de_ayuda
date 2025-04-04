const express = require("express");
const router = express.Router();
const tipoEquipoController = require("../controllers/tipoEquipoController");

router.get("/", tipoEquipoController.getTiposEquipo);
router.get("/:id", tipoEquipoController.getTipoEquipoById);
router.post("/", tipoEquipoController.createTipoEquipo);
router.put("/:id", tipoEquipoController.updateTipoEquipo);
router.delete("/:id", tipoEquipoController.deleteTipoEquipo);

module.exports = router;