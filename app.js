const url = require('url');
const fs = require('fs');

renderHtml = (path, res) => {
    fs.readFile(path, null, (error, data) => {
        if (error) throw error;
        
        res.write(data);
        res.end();
    });

}

module.exports = {
    handleRequest: function(req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});

        let path = url.parse(req.url).pathname;
        
        switch(path) {
            case '/':
                renderHtml('./index.html', res);
                break;
            case '/login':
                renderHtml('./login.html', res);
                break;
            default:
                res.writeHead(404);
                res.write('Page Not Found');
                res.end();
                break;
        }
    }
}