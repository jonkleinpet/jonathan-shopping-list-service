'use strict';

const express = require('express');

// Create an Express application
const app = express();

// Create a static webserver
app.use(express.static('public'));

app.get('/foobar', (req, res) => {
  console.log(req);
  res.send('Hello World!');
  
});

// Listen for incoming connections
app.listen(8080, function () {
  console.info(`Server listening on ${this.address().port}`
  );
}).on('error', err => {
  console.error(err);
});