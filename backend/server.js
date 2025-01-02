const http = require('http');
const express = require('express');

const app = express();

app.get("/", (req,res) => {
    return res.send("Hello from EDS");
})

app.get()

const server = http.createServer(app);

server.listen(8000, () =>  console.log('Server Started!'));