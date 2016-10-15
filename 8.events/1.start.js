function EventEmitter() {
    this._events = {};//存放映射的地方
    this.smile = '笑'
}
//一对多的模式 {'找男朋友':[boy1,boy2]}
EventEmitter.prototype.on = function (eventName,callBack) {
    //将事件名和函数名做映射的地方
    var arr = this._events[eventName];//先看是否能取到对应
    if(arr){
        arr.push(callBack); //取到
    }else{
        this._events[eventName] = [callBack]; //以前没有则创建
    }
};
EventEmitter.prototype.off = function (eventName,callBack) {
    //移除映射的地方
    //将数组中当前eventName对应的数组里包含callback的移除掉
    this._events[eventName] = this._events[eventName].filter(function (item) {
        return item!=callBack; //不满足的留下 满足的删除
    });
};
//{'找男朋友':[boy1,boy2]}
EventEmitter.prototype.emit = function (eventName) {
    //通过事件名触发函数
    //直接将参数列表转化成数组
    var args = Array.from(arguments).slice(1);
    this._events[eventName].forEach((item)=>{
        item.apply(this,args);
    });
};
function Girl() {EventEmitter.call(this);}
var util = require('util');
util.inherits(Girl,EventEmitter);
function boy1(xxx,b) {console.log(xxx,b,this.smile);}
var girl = new Girl();

//girl.off('找男朋友',boy1);
girl.emit('找男朋友','xx1');
girl.emit('找男朋友','xx2','xxx3');
//10.15作业
//girl.once('找男朋友',boy1);
//绑定一次后，执行完删除当前绑定的

//10.19之前
//myconcat
//base64
//异步创建
//做一个简单的增删改查