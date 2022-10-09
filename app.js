const http = require('http');

const server = http.createServer((req, res)=>{
    // console.log('Abhishek Gautam');
    if (req.url==='/home'){
        res.write('<html><body><h1>Welcome To Home</h1></body></html>');
    }
    else if (req.url==='/about'){
        res.write('<html><body><h1>Welcome To About us Page</h1></body></html>');
    }
    else if(req.url==='/node'){ 
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<head><title>My First HTML Page</title></head>')
    res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    res.write('</html>')
    }    
    res.end();
})

server.listen(4000);