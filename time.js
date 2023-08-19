const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    const time= new Date().toLocaleTimeString();
    const date= new Date().toLocaleDateString();
    console.log('Time :' +time+ ',Date:' +date)
});

app.get('/current-time', (req, res) => {
  const currentDate = new Date();
  res.send({ currentTime: currentDate });
});