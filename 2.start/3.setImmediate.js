setImmediate(function () {
    console.log('setImmediate3');
    setImmediate(function () {
        console.log('setImmediate2');
    });
});
setTimeout(function () {
    console.log('11111');
},1);
//nextTick 下一队列 异步操作
process.nextTick(function () {
    console.log(2000);
    setImmediate(function () {
        console.log('setImmediate1');
    });
});
console.log('我是第一');
//setImmediate是给setTimeout一些机会的
//同步 > process.nextTick  >setImmediate > setTimeout(要给时间) > io


