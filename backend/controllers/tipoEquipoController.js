const TipoEquipo = require("../models/TipoEquipo");

exports.getTiposEquipo = async (req, res) => {
  try {
    const tiposEquipo = await TipoEquipo.findAll();
    res.json(tiposEquipo);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los tipos de equipo", error });
  }
};

exports.getTipoEquipoById = async (req, res) => {
  try {
    const tipoEquipo = await TipoEquipo.findByPk(req.params.id);
    if (!tipoEquipo) return res.status(404).json({ message: "Tipo de equipo no encontrado" });
    res.json(tipoEquipo);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el tipo de equipo", error });
  }
};

exports.createTipoEquipo = async (req, res) => {
  try {
    const tipoEquipo = await TipoEquipo.create(req.body);
    res.status(201).json(tipoEquipo);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el tipo de equipo", error });
  }
};

exports.updateTipoEquipo = async (req, res) => {
  try {
    const tipoEquipo = await TipoEquipo.findByPk(req.params.id);
    if (!tipoEquipo) return res.status(404).json({ message: "Tipo de equipo no encontrado" });

    await tipoEquipo.update(req.body);
    res.json(tipoEquipo);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el tipo de equipo", error });
  }
};

exports.deleteTipoEquipo = async (req, res) => {
  try {
    const tipoEquipo = await TipoEquipo.findByPk(req.params.id);
    if (!tipoEquipo) return res.status(404).json({ message: "Tipo de equipo no encontrado" });

    await tipoEquipo.destroy();
    res.json({ message: "Tipo de equipo eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el tipo de equipo", error });
  }
};
