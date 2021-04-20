var http = require("http");
var url = require('url');
var fs = require('fs')

http
    .createServer(function(req, res){
        var q = url.parse(req.url, true);
        if(q.pathname === '/'){
            fs.readFile('index.html', function(err, data){
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data)
                res.end()
            })
        }
        // else if(q.pathname === '/index.html'){
        //     fs.readFile('index.html', function(err, data){
        //         res.writeHead(200, {'Content-Type':'text/html'});
        //         res.end()
        //     })
        // }
        // fs.readFile('index.html', function(err, data){
            // res.writeHead(200, {'Content-Type': 'text/html'});
            // var q = url.parse(req.url, true).query;
        //res.write(req.url)
            // res.end(data);
        //})
    })
    .listen(8080);