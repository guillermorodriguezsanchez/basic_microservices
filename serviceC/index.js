const express = require('express');
const app = express();

app.get('/getTime', (req, res) => {
  res.json({
    time: new Date().toLocaleString()
  });
});

app.listen(3001, () => {
  console.log('Servicio C escuchando en el puerto 3001');
});

module.exports = app;