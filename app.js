

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bem vindos ao WebAcademy!!');
});

app.listen(8081, () => {
  console.log('Rodando na porta 8081');
});
