
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/authRoutes');

dotenv.config(); // Cargar variables de entorno

const app = express();

// Middleware
app.use(express.json()); // Parseo de JSON
app.use(cors()); // Habilitar CORS
app.use(morgan('dev')); // Logger de solicitudes

// Usar rutas
app.use('/api/auth', authRoutes); // Rutas de autenticación

// Conexión a MongoDB 
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error al conectar a MongoDB:', error));

// código para iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});