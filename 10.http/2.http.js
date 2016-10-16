var http  = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');
http.createServer(function (req,res) {
    //获取请求的路径
    console.log(req.url);
    //当前的请求的方法
    console.log(req.method);
    //获得请求头
    console.log(req.headers);
    var mime = {
        '.css':'text/css',
        '.js':'application/x-javascript',
        '.jpg':'image/jpeg'
    };
    if(req.url == '/'){
        res.setHeader('Content-Type','text/html;charset=utf8');
        fs.createReadStream('./2.html').pipe(res);
    }else{
        //先判断目录是否存在
        fs.exists('.'+req.url,function (exists) {
            if(exists){
                res.setHeader('content-type',+mime.lookup(req.url)+';charset=utf8');
                fs.createReadStream('.'+req.url).pipe(res);
            }else{
                res.statusCode = 404;
                res.end();
            }
        });
    }
    /*else if(req.url =='/style.css'){
        res.setHeader('Content-Type','text/css;charset=utf8');
        fs.createReadStream('./style.css').pipe(res);
    }else if(req.url =='/index.js'){
        res.setHeader('Content-Type','application/x-javascript;charset=utf8');
        fs.createReadStream('./index.js').pipe(res);
    }*/
}).listen(8080);