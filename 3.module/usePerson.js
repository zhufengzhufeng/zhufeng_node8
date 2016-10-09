/*var Person = require('./person.js');
var p = new Person();
p.eat();*/
//如果自己写的模块必须要加./ 相对路径
var a = require('./person.js');
console.log(a);
