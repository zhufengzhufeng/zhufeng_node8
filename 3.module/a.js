var calc = {
    '+':(a,b)=>a+b,
    '-':(a,b)=>a-b
};
//用两种方法导出
//exports module.exports

/*function sum(a,b) {
    return a+b
}
let sum = (a,b) => a+b
console.log(sum(1,2));
是没有this指向
*/


/*global.b = 1;
var obj = {
    b:2,
    a:function () {
        setTimeout(()=> {
            this.b +=2;
            console.log(obj.b);
        },1000);
    }
};
obj.a();*/

