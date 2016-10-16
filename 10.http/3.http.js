var http = require('http');
var fs = require('fs');
var mime = require('mime');
var url = require('url');
http.createServer(function (req,res) {
    //当请求到来时才会执行此方法
    //通过不同的url来返回不同的数据 路由
    var pathname = url.parse(req.url,true).pathname;
    if(pathname == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./2.html').pipe(res);
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
