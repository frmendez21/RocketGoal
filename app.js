const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8000;

app.use(express.static('public'));

app.get('/', (request, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
});