const Categoria = require("../models/Categoria");

exports.getCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    //console.log('Categorías obtenidas:', categorias); // Verificar los datos obtenidos

    if (categorias.length === 0) {
      return res.status(404).json({ message: "No hay categorías" });
    }
    res.json(categorias);
  } catch (error) {
    console.error("Error al obtener las categorías", error); // Log de error
    res.status(500).json({ message: "Error al obtener las categorías", error });
  }
};


exports.getCategoriaById = async (req, res) => {
  try {
    const categoria = await Categoria.findByPk(req.params.id);
    if (!categoria) return res.status(404).json({ message: "Categoría no encontrada" });
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la categoría", error });
  }
};

exports.createCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.create(req.body);
    res.status(201).json(categoria);
  } catch (error) {
    res.status(500).json({ message: "Error al crear la categoría", error });
  }
};

exports.updateCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findByPk(req.params.id);
    if (!categoria) return res.status(404).json({ message: "Categoría no encontrada" });

    await categoria.update(req.body);
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la categoría", error });
  }
};

exports.deleteCategoria = async (req, res) => {
  try {
    const categoria = await Categoria.findByPk(req.params.id);
    if (!categoria) return res.status(404).json({ message: "Categoría no encontrada" });

    await categoria.destroy();
    res.json({ message: "Categoría eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la categoría", error });
  }
};
