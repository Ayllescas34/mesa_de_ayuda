const Evaluacion = require("../models/Evaluacion");

exports.getEvaluaciones = async (req, res) => {
  try {
    const evaluaciones = await Evaluacion.findAll({
      attributes: ['idEvaluacion', 'calificacionEvaluacion', 'comentariosEvaluacion', 'idTicket', 'idUsuario']
    });
    res.json(evaluaciones.map(evaluacion => evaluacion.get({ plain: true })));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las evaluaciones", error });
  }
};


exports.getEvaluacionById = async (req, res) => {
  try {
    const evaluacion = await Evaluacion.findByPk(req.params.id);
    if (!evaluacion) return res.status(404).json({ message: "Evaluación no encontrada" });
    res.json(evaluacion);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la evaluación", error });
  }
};

exports.createEvaluacion = async (req, res) => {
  try {
    const evaluacion = await Evaluacion.create(req.body);
    res.status(201).json(evaluacion);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la evaluación", error });
  }
};

exports.updateEvaluacion = async (req, res) => {
  try {
    const evaluacion = await Evaluacion.findByPk(req.params.id);
    if (!evaluacion) return res.status(404).json({ message: "Evaluación no encontrada" });

    await evaluacion.update(req.body);
    res.json(evaluacion);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la evaluación", error });
  }
};

exports.deleteEvaluacion = async (req, res) => {
  try {
    const evaluacion = await Evaluacion.findByPk(req.params.id);
    if (!evaluacion) return res.status(404).json({ message: "Evaluación no encontrada" });

    await evaluacion.destroy();
    res.json({ message: "Evaluación eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la evaluación", error });
  }
};
