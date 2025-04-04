require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");

// Importar rutas
const usuarioRoutes = require("./routes/usuarioRoutes");
const categoriaRoutes = require("./routes/categoriaRoutes");
const departamentoRoutes = require("./routes/departamentoRoutes");
const equipoRoutes = require("./routes/equipoRoutes");
const evaluacionRoutes = require("./routes/evaluacionRoutes");
const rolRoutes = require("./routes/rolRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const ticketEquipoRoutes = require("./routes/ticketEquipoRoutes");
const tipoEquipoRoutes = require("./routes/tipoEquipoRoutes");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use("/usuarios", usuarioRoutes);
app.use("/categorias", categoriaRoutes);
app.use("/departamentos", departamentoRoutes);
app.use("/equipos", equipoRoutes);
app.use("/evaluaciones", evaluacionRoutes);
app.use("/roles", rolRoutes);
app.use("/tickets", ticketRoutes);
app.use("/ticket-equipos", ticketEquipoRoutes);
app.use("/tipo-equipos", tipoEquipoRoutes);

// Prueba de conexión
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Verificar conexión a la base de datos
sequelize.sync({ force: false })
  .then(() => console.log("📦 Modelos sincronizados con la base de datos ✅"))
  .catch(err => console.error("❌ Error al sincronizar modelos", err));

// Puerto de conexión
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
