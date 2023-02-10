const express = require('express');
const app = express();
require('dotenv').config();
const consul = require('consul');
const consulClient = new consul({host: 'consul', port: '8500'});


app.get('/getTime', (req, res) => {
  res.status(500).json({
    error: 'Error getting the time'
  });
});

app.listen(process.env.PORT, () => {
  console.log('Servicio B listening in port ', process.env.PORT);
  consulClient.agent.service.register({
    name: "serviceb",
    address: "serviceb",
    port: 3000,
  }, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Service B registered with Consul');
    }
  });
});


module.exports = app;