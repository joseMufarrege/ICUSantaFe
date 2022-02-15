
var http = require('http');
var fs = require('fs');
var ruta = require('path');

function ejecutar(){
    function onRequest(req,res){
        console.log(req.url);

        var rutaArchivo = '.' + ((req.url=='/')?'/index.html':req.url);
        
        var ext = ruta.extname(rutaArchivo);
        var contentType = 'text/html';

        switch(ext){
            case '.css':
                contentType = 'text/css';       
        }

        fs.readFile(rutaArchivo,function(error,content){
            if(error){
                res.writeHead(500);
                res.end();
            }else{
                res.writeHead(200,{'Content-Type': contentType});
                res.end(content);
            }
        });
       
    }
    var server = http.createServer(onRequest).listen(8080);
    console.log('Servidor running en puerto 8080');
}

exports.ejecutar = ejecutar();

