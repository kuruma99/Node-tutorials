//Working with http module

const http = require('http');
// req object is the client's request
//res is the response back to the client
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('Hello world from nodejs');
        res.end();
    }
    else{  
        res.write('Using some other domain');
        res.end();
    }
});

//listening for the server at the port
server.listen('3000');