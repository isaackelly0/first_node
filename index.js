var http = require("http");
var url = require('url');
var fs = require('fs')

http
    .createServer((req, res)=>{
        var q = url.parse(req.url, true);
        let page404 = fs.readFileSync("404.html", (err, data) => {
            if (err) throw err;
            return data;
        });
        let filename = "." + q.pathname + ".html"
        if (q.pathname === "/"){
            filename = "index.html";
        }
        fs.readFile(filename, (err, data) => {
            if (err){
                res.write(page404);
                return res.end();
            }
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            return res.end();
        })
    })
    .listen(8080);