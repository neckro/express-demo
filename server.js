#!/usr/bin/env node
const express = require('express');

const PORT = 7777;
const app = express()

var counter = 0;

app.use(express.static('./www'))

app.get('/api/counter', (req, res) => {
  res.send((++counter).toString());
})


app.listen(PORT);
console.log(`Listening at: http://127.0.0.1:${PORT}/`);
