function EventEmitter() {
    this._events = {};//用来存放事件名对用的事件池
}
EventEmitter.prototype.on = function (eventName,callback) {
    //看是否有此事件如果有直接push到池子中
    if(this._events[eventName]){
        this._events[eventName].push(callback);
    }else{
        //创建一个池子并且将内容放进去
        this._events[eventName] = [callback];
    }
};
//{饿了:[hungry,hungry]} this._events
EventEmitter.prototype.emit = function (eventName) {
    //获取参数列表
    var args = Array.prototype.slice.call(arguments,1);
    var that = this;
    this._events[eventName].forEach(function (item) {
        item.apply(that,args);
    })
};
EventEmitter.prototype.once = function (eventName,callback) {
    //once绑定一次当emit时触发后移除once的函数
    function one() { //会接收emit执行的参数
        callback.apply(null,arguments);
        this.removeListener(eventName,one)
    }
    this.on(eventName,one);
};
EventEmitter.prototype.removeListener = function (eventName,callback) {
    //通过事件名找到对应的数组，将数组中同名函数移除掉
    this._events[eventName] = this._events[eventName].filter(function (item) {
        return item!=callback;
    });
};
var e = new EventEmitter();
function hungry(who) {
    console.log(who+'饿了');
}
//e.on('饿了',hungry); //绑定只是建立一对多的关系
e.once('饿了',hungry);
e.removeListener('饿了',hungry);
e.emit('饿了','我');//此时才执行对应事件池中的方法
//e.emit('饿了','我');//此时才执行对应事件池中的方法
