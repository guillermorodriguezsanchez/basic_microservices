const express = require('express');
const axios = require('axios');
const app = express();

app.get('/getTimeFromServiceB', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3000/getTime');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: 'Error al obtener la hora desde el Servicio B'
    });
  }
});

app.get('/getTimeFromServiceC', async (req, res) => {
  try {
    const response = await axios.get('http://localhost:3001/getTime');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: 'Error al obtener la hora desde el Servicio C'
    });
  }
});

app.listen(3002, () => {
  console.log('Servicio A escuchando en el puerto 3002');
});
