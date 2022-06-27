const http = require("http")
const fs = require("fs")


http.createServer(function(req, res){
    if(req.url=="/"){
    fs.readFile('index.html', (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}else if(req.url=="/public"){
    fs.readFile('public.html', (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}else if(req.url=="/public/other"){
    fs.readFile('other.txt', (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });

}else if(req.url=="/data"){
    fs.readFile('data.txt', (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}else if(req.url=="/src"){
    fs.readFile('src.txt', (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });}
}).listen(4000);

