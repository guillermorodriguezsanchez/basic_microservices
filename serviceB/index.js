const express = require('express');
const app = express();
require('dotenv').config();

app.get('/getTime', (req, res) => {
  res.status(500).json({
    error: 'Error getting the time'
  });
});

app.listen(process.env.PORT, () => {
  console.log('Servicio B listening in port ', process.env.PORT);
});



module.exports = app;