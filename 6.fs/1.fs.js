//fs file system node核心模块
var fs = require('fs');
//fs中的方法分为两种同步和异步，能用异步就不要用同步，同步和异步的方法，是一同出现的
//读文件同步
try{
var data = fs.readFileSync('./name1.txt','utf8');
}catch (e){
    console.log(e);
}//同步会等待读取结果后返回结果
//读取到内存中，默认读出的内容为buffer类型
console.log(data);//设置utf8编码读取内容
//同步代码我们可以使用try catch来进行捕获异常
//注readfile不能读取过大的文件，防止淹没可用内存（不超过16k）

//异步读取  error-first
fs.readFile('./name.txt','utf8',function (err,data) {
    if(err)console.log(err);
    console.log(data);
});
//readfile readfileSync