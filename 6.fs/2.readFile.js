var fs  = require('fs');
var school = {};
/*var name = fs.readFileSync('./name.txt','utf8');
var age = fs.readFileSync('./age.txt','utf8');
school.name = name;
school.age = age;
console.log(school);*/
//{name:'珠峰培训',age:'8'}

console.time('start');
fs.readFile('./name.txt','utf8',function (err,data) {
    setTimeout(function () {
        school.name = data;
        output()
    },2000);
});
fs.readFile('./age.txt','utf8',function (err,data) {
    setTimeout(function () {
        school.age = data;
        output()
    },1000);
});
function output() {
    //console.log(Object.keys(school)); //将对象中的属性转换成数组
    if(Object.keys(school).length==2){
        console.log(school);
        console.timeEnd('start');
    }
}
//计数器可以解决异步的问题



