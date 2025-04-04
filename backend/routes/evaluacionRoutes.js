const express = require("express");
const router = express.Router();
const evaluacionController = require("../controllers/evaluacionController");

router.get("/", evaluacionController.getEvaluaciones);
router.get("/:id", evaluacionController.getEvaluacionById);
router.post("/", evaluacionController.createEvaluacion);
router.put("/:id", evaluacionController.updateEvaluacion);
router.delete("/:id", evaluacionController.deleteEvaluacion);

module.exports = router;