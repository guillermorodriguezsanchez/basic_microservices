const express = require('express');
const axios = require('axios');
const app = express();

require('dotenv').config();

app.get('/getTimeFromServiceB', async (req, res) => {
  try {
    const response = await axios.get('http://serviceb:3000/getTime');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: 'Failing to obtain the hour from the Service B'
    });
  }
});

app.get('/getTimeFromServiceC', async (req, res) => {
  try {
    const response = await axios.get('http://servicec:3000/getTime');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: 'Failing to obtain the hour from the Service C'
    });
  }
});

//registerService();


app.listen(process.env.PORT, () => {
  console.log('Service A listening in port', process.env.PORT);
});
