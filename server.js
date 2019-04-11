const http = require('http');
const fs = require('fs');

onRequest = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    fs.readFile('./index.html', null, (error, data) => {
        if (error) throw error;
        
        res.write(data);
        res.end();
    });

    // res.end();
}

http.createServer(onRequest).listen(8000);