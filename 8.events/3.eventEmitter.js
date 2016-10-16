//node给我们提供了一个eventEmitter的核心模块，专门用来处理事件的
var EventEmitter  = require('events');
var e = new EventEmitter();
function boy1(who) {
    console.log(`找了个${who}样子的`);
}
function girl(who) {
    console.log(`找了个${who}样子的`);
}
e.on('找男朋友',boy1);
e.on('找男朋友',girl);
//e.removeListener('找男朋友',boy1);//移出单个事件
e.removeAllListeners('找男朋友');//移除所有事件
e.emit('找男朋友','handsome'); //触发事件
e.emit('找男朋友','rich');
//on addListener 绑定事件
//once 绑定一次
//emit触发绑定的事件
//removeAllLister移除所有事件
//removeListener 移除事件
