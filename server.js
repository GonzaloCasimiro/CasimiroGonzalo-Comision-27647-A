require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const conectar_mongo = require('./config/mongoose_config');

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.listen(port, () => {
  console.log(`El servidor está escuchando en http://localhost:${port}`);
  conectar_mongo();
});