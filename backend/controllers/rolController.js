const Rol = require("../models/Rol");

exports.getRoles = async (req, res) => {
    try {
      const roles = await Rol.findAll();
      res.json(roles);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los roles", error });
    }
  };
  
  exports.getRolById = async (req, res) => {
    try {
      const rol = await Rol.findByPk(req.params.id);
      if (!rol) return res.status(404).json({ message: "Rol no encontrado" });
      res.json(rol);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener el rol", error });
    }
  };
  
  exports.createRol = async (req, res) => {
    try {
      const rol = await Rol.create(req.body);
      res.status(201).json(rol);
    } catch (error) {
      res.status(500).json({ message: "Error al crear el rol", error });
    }
  };
  
  exports.updateRol = async (req, res) => {
    try {
      const rol = await Rol.findByPk(req.params.id);
      if (!rol) return res.status(404).json({ message: "Rol no encontrado" });
  
      await rol.update(req.body);
      res.json(rol);
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar el rol", error });
    }
  };
  
  exports.deleteRol = async (req, res) => {
    try {
      const rol = await Rol.findByPk(req.params.id);
      if (!rol) return res.status(404).json({ message: "Rol no encontrado" });
  
      await rol.destroy();
      res.json({ message: "Rol eliminado correctamente" });
    } catch (error) {
      res.status(500).json({ message: "Error al eliminar el rol", error });
    }
  };