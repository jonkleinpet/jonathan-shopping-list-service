/* eslint-disable strict */
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World \n');
  res.end();
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});