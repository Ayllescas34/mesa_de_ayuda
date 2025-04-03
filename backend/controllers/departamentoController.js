const Departamento = require("../models/Departamento");

exports.getDepartamentos = async (req, res) => {
    try {
        const departamentos = await Departamento.findAll();
        res.json(departamentos);
    } catch (error) {
        res.status(500).json({message: "Error al obtener los departamentos", error});
    }
};

exports.getDepartamentoById = async (req, res) =>{
    try {
        const departamento = await Departamento.findByPk(req.params.id);
        if(!departamento) return res.status(404).json({message: "Departamento no encontrado"});
        res.json(departamento);
    } catch (error) {
        res.status(500).json({message: "Error al obtener el departamento", error});
    }
};

exports.createDepartamento = async (req, res) => {
    try {
        const departamento = await Departamento.create(req.body);
        res.status(201).json(departamento);
    } catch (error) {
        res.status(500).json({message: "Error al crear el departamento", error});
    }
};

exports.updateDepartamento = async (req, res) => {
    try {
        const departamento = await Departamento.findByPk(req.params.id);
        if(!departamento) return res.status(404).json({message: "Departamento no encontrado"});

        await departamento.update(req.body);
        res.json(departamento);
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el departamento", error });
    }
};

exports.deleteDepartamento = async (req, res) => {
    try {
        const departamento = await Departamento.findByPk(req.params.id);
        if(!departamento) return res.status(404).json({ message: "Departamento no encontrado"});

        await departamento.destroy();
        res.json({ message: "Departamento eliminado correctamente"});
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el departamento", error });
    }
}