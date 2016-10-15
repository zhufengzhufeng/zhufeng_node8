//将任意进制转换成10进制
console.log(parseInt('00111111',2));//将2进制的11转换成10进制
console.log(parseInt('010',8));

//任意进制转任意进制
//toString
console.log((0xff).toString(2));

//base64 将内容变成了可见编码
console.log(parseInt('00111111',2)); //base的要求算出来的10进制 不能大于64，算出来的值用来在可见编码中取出
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str+=str.toLowerCase();
str+='0123456789';
str+='+/';
//base64的范围00000000 - 00111111

var a = new Buffer('珠');// 转化base64;
console.log(a); //e7 8f a0
//先将16进制转化成2进制
console.log((0xe7).toString(2));
console.log((0x8f).toString(2));
console.log((0xa0).toString(2));
/*
* 11100111
  10001111
  10100000
* */
//1.将二进制连起来111001111000111110100000
//2.每隔六位分成4段 00111001   00111000   00111110   00100000
// 将得出的这四段取成10进制
console.log(parseInt('00111001',2));
console.log(parseInt('00111000',2));
console.log(parseInt('00111110',2));
console.log(parseInt('00100000',2)); //57 56 62 32
console.log(str[57]+str[56]+str[62]+str[32]) ; //base64编码
//把一个3个字节8位 转成4个字节6为 不足前补0
function base64() {
    return val
}
base64('峰'); //myconcat  转换base64