const express = require('express');





const server = express();
server.use(express.json());
server.get('/', (req, res) => {
    res.send('<h3>Server running</h3>');
  });
module.exports = server;