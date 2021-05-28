
const http = require('http');

const server = http.createServer((req,res) => {
    if(req.method === "GET" && req.url === '/hello') {
        res.write("Hello World from 'GET!'");
        res.end();
    }

    if(req.method === "POST" && req.url === '/hello') {
        res.write("Hello World from 'POST!'");
        res.end();
    }

    if(req.url.startsWith('/me')) {

        const urlAfterSlashMe = req.url.substr(3);

        if(urlAfterSlashMe.startsWith('?')) {
            res.write(urlAfterSlashMe.substr(6));
            res.end();
        }

        else if(urlAfterSlashMe.startsWith('/hello')) {
            const urlAfterSlashHello = urlAfterSlashMe.substr(6);
            
            if(urlAfterSlashHello.startsWith('?')) {
                res.write(`Hello ${urlAfterSlashHello.substr(6)}`);
                res.end();
            }

            else if(urlAfterSlashHello.startsWith('/')) {
                res.write(`Hello ${urlAfterSlashHello.substr(1)}`);
                res.end();
            }
       
        }

        else {
            res.write(urlAfterSlashMe.substr(1));
            res.end();
        }
    }
});

// server.on('connection', (socket) => {
//     console.log('New connection...');
// });

server.listen(7050);

console.log('Listening on port 7050...');