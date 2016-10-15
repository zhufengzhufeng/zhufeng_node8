//进制  计算机由二进制组成
//当前位的最大值（几进制-1）* 当前是几进制的所在位的几次方
var sum = 0;
for(var i =0; i<8;i++){
    sum+=Math.pow(2,i)
}
console.log(sum);//0-255之间
//ff 0123456789abcdef  f代表的就是16进制中的15
//   15*16^1+15*16^0 = > 255

//在buffer中变现成16进制
//10进制的 3 是二进制的多少？ 11
//10进制的17 在16进制中应该是多少    11
//10进制中的100 在16进制中应该是多少   16*6 = 96 + 4   64

//buffer是一段内存空间，必须大小是固定的，
//构建buffer的三种方式
//1.通过长度来创建
var buf1 = new Buffer(5);
console.log(buf1); //通过长度创建的buffer默认值是随机的
//2.通过数组的方式进行创建
var buf1 = new Buffer([1,18]); //0-255
//如果值是赋值则加256 值大于255则对255取模 如果写的不识别一律为0
console.log(buf1);
//3.通过字符串来创建buffer
var buf1 = new Buffer('珠峰培训'); //汉字在utf8格式中默认1个汉字三个字节,node中不支持gb
console.log(buf1);

var buf2 = new Buffer(6);
//将珠峰两个汉字写入到buffer中
//string,写入的字符串 offset,偏移量 length,长度encoding编码格式
buf2.write('珠',0,3,'utf8'); //后两个参数可以省略
buf2.write('峰',3,3,'utf8');
console.log(buf2.toString()); // buffer转换成字符串可以调用toString方法


