//node来搭建服务
//静态服务 http-server
// npm install -g http-server
//http-server 开启一个服务器来访问我的页面
var http  = require('http');
var fs = require('fs');
http.createServer(function (req,res) {
    //req客户端的请求
    //res服务端的响应
    //根据访问的页面返回不同的内容 //pendding
    //res可写流，req 流
    //设置请求头防止乱码
    /*res.setHeader('Content-Type','text/plain;charset=utf8');
    res.statusCode=200;
    //res.writeHead(200,{'Content-Type':'text/plain;charset=utf8'})
    res.write('字符串');
    res.end(); //必须要挂掉电话，*/
    //响应文件，通过请求路径响应不同的内容
    /*var data = fs.readFileSync('./1.html');
    res.end(data);*/
    //异步限制内存的使用
    //创建可读流调用可写流的write方法写入到res中
    res.setHeader('Content-Type','text/html;charset=utf8');
    fs.createReadStream('./2.html').pipe(res);
}).listen(8080);