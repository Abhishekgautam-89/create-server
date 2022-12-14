
 const fs = require('fs');

const routeHandler = (req, res)=>{
    if (req.url==='/'){
        fs.readFile('message1.txt',{encoding: 'utf-8'}, (err, data)=>{
            if(err){ 
                console.log(err)
            }
            console.log(data);
        
            res.write('<html>')
            res.write(`<div><h2>${data}</h2></div>`)
            res.write('<head><h3>Please enter the fields</h3></head>')
            res.write('<body>')
            res.write('<form action="/message1" method = "POST">')
            res.write('<input type="text" name="message">')
            res.write('<button type="submit">Send</button>')
            res.write('</form>')
            res.write('</body>')
            res.write('</html>')
            return res.end();
        })        

    }
    else if (req.url==="/message1" && req.method==="POST"){
        
        const body=[];
        req.on('data', (chunk)=>{
            body.push(chunk);
        })
        return req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[0];
            fs.writeFile('message1.txt', message, (err)=>{
                res.statusCode = 302;
                res.setHeader("Location", "/")                
                return res.end();
            })
        })
    }
}

module.exports=routeHandler
// other ways to use
// module.exports={
//     router: routeHandler,
//     someText: 'hello'
// }

// exports.handler=routeHandler;
// exports.someText='hii'