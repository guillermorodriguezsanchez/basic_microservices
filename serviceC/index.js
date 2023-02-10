const express = require('express');
const app = express();
require('dotenv').config();

app.get('/getTime', (req, res) => {
  res.json({
    time: new Date().toLocaleString()
  });
});

app.listen(process.env.PORT, () => {
  console.log('Service C listening in port ', process.env.PORT);
});

module.exports = app;