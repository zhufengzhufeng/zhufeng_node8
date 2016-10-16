var fs = require('fs');
var rs =  fs.createReadStream('./name.txt',
    {highWaterMark:1}); //唯一的一个包前包后的 ,start:0,end:4
//path 读取的目录
//options
//encoding null 默认buffer
//flags:'r'  打开文件为读取
//highWaterMark 64k 字节
//start end 开始位置到结束为止
//要将非流动模式转化成流动模式
var arr = [];
rs.on('data',function (data) { //不停的触发ondata事件
    arr.push(data);
    //console.log(data);//如果转换成流动模式会以最快的速度读出来
    rs.pause();//暂停读取
    console.log('吃一口');
});
setInterval(function () {
    rs.resume();//恢复读取
},1000);
rs.on('end',function () {
    //将整个数据进行输出
    console.log(Buffer.concat(arr).toString());
});
