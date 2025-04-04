const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

// Definir las rutas
router.get("/", usuarioController.getUsuarios); 
router.get("/:id", usuarioController.getUsuarioById);
router.post("/", usuarioController.createUsuario);
router.put("/:id", usuarioController.updateUsuario);
router.delete("/:id", usuarioController.deleteUsuario);

module.exports = router;