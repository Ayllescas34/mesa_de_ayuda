require("dotenv").config();
const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");


const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

// Puerto de conexión
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
