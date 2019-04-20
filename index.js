// index.js
const express = require('express');
const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

//  Init App
const app = express();
const server = http.createServer(app);

// Init qrreader
// const jsQR = require("jsqr");

app.use(express.static(__dirname + '/public/'));

app.get('/normal', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

app.get('/videostream', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname + '/public/videostream.html');
});

app.get('/example', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname + '/public/qrscanning.html');
});

app.get('/index', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname + '/public/index.html');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
