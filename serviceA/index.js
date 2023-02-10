const express = require('express');
const axios = require('axios');
const app = express();
const consul = require('consul');

require('dotenv').config();

const consulClient = new consul({host:'consul', port : '8500'});

app.get('/getTimeFromServiceB', async (req, res) => {
  try {
    const serviceB = await consulClient.health.service({
      service: 'serviceb',
      passing: true,
    });
    const { Address: address, Port: port } = serviceB[0].Service;
    const portNumber = Number(port);
    const response = await axios.get(`http://${address}:${portNumber}/getTime`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: 'Failing to obtain the hour from the Service B'
    });
  }
});

app.get('/getTimeFromServiceC', async (req, res) => {
  try {
    const serviceC = await consulClient.health.service({
      service: 'servicec',
      passing: true,
    });
    const { Address: address, Port: port } = serviceC[0].Service;
    const portNumber = Number(port);
    const response = await axios.get(`http://${address}:${portNumber}/getTime`);
    res.json(response.data);
    } catch (error) {
    res.status(500).json({
    error: 'Failing to obtain the hour from the Service C'
    });
    }
    });

app.listen(process.env.PORT, () => {
  console.log('Service A listening in port', process.env.PORT);
});
