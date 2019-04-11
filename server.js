const http = require('http');

onRequest = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello Developer! Welcome to Node-land!');
    res.end();
}

http.createServer(onRequest).listen(8000);