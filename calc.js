var http = require('http');
http.createServer(function(rec,res){
    res.end('ola');
    
}).listen(8081);
console.log("O servidor está rodando");
