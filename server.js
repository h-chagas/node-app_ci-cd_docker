const express = require('express');
const server = express();
const path = require('path');

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

server.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname+'/about.html'))
})

server.listen(8081, () => {
    console.log("Server is running...");
})
