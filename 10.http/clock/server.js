var http = require('http');
var fs = require('fs');
var mime = require('mime');
var url = require('url');
http.createServer(function (req,res) {
    var pathname = url.parse(req.url,true).pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./clock.html').pipe(res);
    }else if(pathname=='/clock'){
        res.setHeader('Content-Type','text/plain;charset=utf8');
        res.end(new Date().toLocaleString());
    }else{
        fs.exists('.'+pathname,function (exists) {
            if(exists){
                res.setHeader('content-type',mime.lookup(pathname)+';charset=utf8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;res.end();
            }
        })
    }
}).listen(3000);


//当请求到来时才会执行此方法
//通过不同的url来返回不同的数据 路由