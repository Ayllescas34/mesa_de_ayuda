const Equipo = require("../models/Equipo");

exports.getEquipos = async (req, res) => {
  try {
    const equipos = await Equipo.findAll();
    res.json(equipos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los equipos", error });
  }
};

exports.getEquipoById = async (req, res) => {
  try {
    const equipo = await Equipo.findByPk(req.params.id);
    if (!equipo) return res.status(404).json({ message: "Equipo no encontrado" });
    res.json(equipo);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el equipo", error });
  }
};

exports.createEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.create(req.body);
    res.status(201).json(equipo);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el equipo", error });
  }
};

exports.updateEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.findByPk(req.params.id);
    if (!equipo) return res.status(404).json({ message: "Equipo no encontrado" });

    await equipo.update(req.body);
    res.json(equipo);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el equipo", error });
  }
};

exports.deleteEquipo = async (req, res) => {
  try {
    const equipo = await Equipo.findByPk(req.params.id);
    if (!equipo) return res.status(404).json({ message: "Equipo no encontrado" });

    await equipo.destroy();
    res.json({ message: "Equipo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el equipo", error });
  }
};
