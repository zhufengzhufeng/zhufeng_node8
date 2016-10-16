//可写流
var fs = require('fs');
var ws = fs.createWriteStream('./name.txt');
//highWaterMark 16k
//defaultEncoding: 'utf8',
var flag = ws.write('1',function () { //写入的数据类型必须是buffer类型，或者是字符串类型
    console.log('写入成功');
});
console.log(flag); //write方法是具有返回值的，意味着还能继续往里写，看看还能不能继续写入
ws.end('全部写入'); //可写流会有两个方法write.end
//end方法叫结束写入，会将end方法中的内容，和内存中残留的内容一起写入文件内，并且关闭文件
