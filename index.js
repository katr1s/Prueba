const express = require('express');
const app = express();



app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/hola', (req, res) => {
  res.sendFile(__dirname + '/hola.html');
});

app.listen(3000, () => {
  console.log('El servidor está corriendo en el puerto 3000');
});
