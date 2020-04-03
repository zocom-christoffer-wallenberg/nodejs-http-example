const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (req, res) => {
    console.log(req.url);
    if (req.url == '/') {
        const read = fs.createReadStream('index.html');
        read.pipe(res);
    } else if (req.url == '/style.css') {
        const read = fs.createReadStream('style.css');
        read.pipe(res);
    } else if (req.url == '/about') {
        const read = fs.createReadStream('about.html');
        read.pipe(res);
    } else {
        const read = fs.createReadStream('404.html');
        read.pipe(res);
    }
});

server.listen(8000);