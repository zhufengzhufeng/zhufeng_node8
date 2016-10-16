//默认一次读取64k  一次写入16k  128k的文件
//现在一次都读取回来 直接把128k扔给写入  可用内存占用112k
//默认一次读取64k 先读64k 你去写  只有48
//在读取64k  你去写   只有48
var fs = require('fs');
var rs = fs.createReadStream('./name.txt');
var ws = fs.createWriteStream('./name1.txt');
//data事件是如何触发，会将数据以最快的速度读出来
rs.on('data',function (data) {
    //要先判断是否都能写入，如果不能写入要等我消化后再写入
    flag = ws.write(data); //你给64k  我只能写入16k false
    if(!flag){rs.pause();}
});
ws.on('drain',function () {rs.resume(); console.log('干了');});
rs.on('end',function () {ws.end(); //将内存中的强制写入在关闭
});




