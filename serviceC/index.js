const express = require('express');
const app = express();
require('dotenv').config();
const consul = require('consul');
const consulClient = new consul({host: 'consul', port: '8500'});


app.get('/getTime', (req, res) => {
  res.json({
    time: new Date().toLocaleString()
  });
});

app.listen(process.env.PORT, () => {
  console.log('Servicio C listening in port ', process.env.PORT);
  consulClient.agent.service.register({
    name: "servicec",
    address: "servicec",
    port: 3000,
  }, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Service C registered with Consul');
    }
  });
});

module.exports = app;