/**
 * Created by MaoerBaby on 2016/10/15.
 */
//内置模块(核心模块) node自带的模块
//文件模块 ./形式
//第三方模块 第三方模块需要通过npm 安装 node_modules文件夹下啊
//核心和第三方引入方式相同

//核心模块util 主要是用来继承和提供一些常用方法、
var util = require('util');
//原生js中继承方式
//实例继承
function Parent() {
    this.smile = '笑'
}
Parent.prototype.eat = function () {
    console.log('eat');
};
function Child() {
    //Parent.call(this);
}
util.inherits(Child,Parent); //util中提供的方法，用来继承的
var c = new Child();

var obj = {name:'zfpx',world:{world:'world'}};
Object.defineProperty(obj,'age',{
    value:'8',
    enumerable:false,//是否可枚举
    configurable:false,//是否可配置 是否可以进行删除
    writable:false//是否可写
});
obj.age = 199;
// obj, {showHidden, depth, colors}
console.log(util.inspect(obj,{showHidden:true,depth:1,colors:true})); //可枚举 不可枚举

//util判断类型
console.log(util.isArray([]));
console.log(util.isRegExp([]));
console.log(util.isError([]));
console.log(util.isBoolean([]));

//console.dir();//将内容详细打印，util.inspect


//Child.prototype = new Parent(); //会继承父亲的私有方法
//call继承 不会拥有原型上的方法
//var c = new Child();
//console.log(c.smile);
//原型链继承
/*Child.prototype.__proto__ = Parent.prototype; //公有方法
Child.prototype = Object.create(Parent.prototype);//公有方法
Object.setPrototypeOf(Child.prototype,Parent.prototype);//公有方法*/
/*Object.setPrototypeOf = function (ctp,ptp) {
    ctp.__proto__ = ptp;
}*/

//setPrototypeOf
//defineProperty


