const express = require('express');
const server = require('./server.js');

server.use(express.json());

const PORT = process.env.PORT || 8000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});