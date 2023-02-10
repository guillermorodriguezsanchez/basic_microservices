const express = require('express');
const app = express();

app.get('/getTime', (req, res) => {
  res.status(500).json({
    error: 'Error al obtener la hora'
  });
});

app.listen(3000, () => {
  console.log('Servicio B escuchando en el puerto 3000');
});



module.exports = app;