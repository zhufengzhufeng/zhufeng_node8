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
/*buf2.write('珠',0,3,'utf8'); //后两个参数可以省略
buf2.write('峰',3,3,'utf8');*/
buf2.write('珠峰');
console.log(buf2.toString()); // buffer转换成字符串可以调用toString方法

//数组中的slice和buffer中的slice
var a = [1,2];
var b = [];
var c = b.slice();
a[0] = 100;
console.log(c); //slice只是浅拷贝 存的仍然是地址
//数组
var a = [1,2];
b = a.slice();
a[0] = 100;
console.log(b);
//buffer
var buffer1 = new Buffer([1,2,3]);
var newBuffer = buffer1.slice(0,1); //将内存中某一部分拿出来，而不是克隆了一个一样的
newBuffer[0] = 100;
console.log(buffer1); //64 2 3
//字符串中有length属性
var str ='珠峰';
var buffer1 = new Buffer('珠峰');
console.log(buffer1[0]);//转换成10进制  14*16+7=231
console.log(buffer1.length);//算的是字节的长度
//buffer存放的值
var buff1 = new Buffer([0xff]);
console.log(buff1);

//copy方法
var buff1 = new Buffer(12);
var buf1 = new Buffer('珠峰');
var buf2 = new Buffer('培训');
// targetBuffer,目标buff targetStart, 目标开始 sourceStart, 源开始sourceEnd 源结束
buf1.copy(buff1,0,0,6); //包前不包后
buf2.copy(buff1,6,0,6);
console.log(buff1.toString());

//拼接buffer concat
//var newBuffer = Buffer.concat([buf1,buf2],200);
//console.log(newBuffer.toString());
Buffer.myConcat = function (list,len) {
    //1.判断是否传递长度，没传需要算出长度
    //2.构建一个buffer,将数组中的每一个buffer拷贝到大buffer上，最后返回buffer
    if(typeof len == 'undefined'){//判断是否传递len属性
        //先获取数组中的每一个buffer算出长度进行累加
        len = 0;
        list.forEach(function (item,index) {
            len+=item.length;
        });
    }
    var buffer = new Buffer(len); //通过总长度构建一个buffer
    //要把小buffer一个个考入到大buffer中
    var l = 0;
    list.forEach(function (item) {
        //targetBuffer, targetStart, sourceStart, sourceEnd
        item.copy(buffer,l,0,item.length);
        l+=item.length;//每次拷贝重新计算targetStart
    });
    //循环后的l表示一共拷贝了多少
    return buffer.slice(0,l);
};
//concat方法 slice copy

var newBuffer = Buffer.myConcat([buf1,buf2],3);
console.log(newBuffer.toString());