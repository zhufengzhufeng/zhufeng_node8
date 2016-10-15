//拷贝文件 写一个同步的在写一个异步的
var fs = require('fs');
function syncCopy(source,target) { //同步拷贝
    //同步
    fs.writeFileSync(target,fs.readFileSync(source));
}
function AsyncCopy(source,target) { //异步拷贝
    fs.readFile(source,function (err,data) {
        if(err)console.log(err);
        fs.writeFile(target,data);
    });
}
AsyncCopy('./1.txt','./100.txt');