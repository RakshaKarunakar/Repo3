const express = require('express');
const app = express();
const port = 7000;

app.get('/current-time', (req, res) => {
  const a = [new Time().toLocaleTimeString(),
  new Date().toLocaleDateString()]
  res.send(a);
});