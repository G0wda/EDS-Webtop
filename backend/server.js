const http = require('http');
const express = require('express');

const app = express();

app.get('/', (res,req) => {
    return res.send("Hello from EDS");
})


const server = http.createServer(app);

server.listen(8000, () =>  console.log('Server Started!'));