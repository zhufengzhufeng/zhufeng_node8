function Person() {
    this.name = '你好';
    this.age = '8';
}
Person.prototype.eat = function () {
    console.log('吃');
}
Person.prototype.drink = function () {
    console.log('喝');
}
//exports.a = 1;
//{a:1}
//exports = 1;
//1

module.exports = Person;

/*(function (exports,require,module,__dirname,__filename) {
    this = exports;
    module.exports = exports = {}
    文件
    exports = Person
    return module.exports
})*/
//向exports对象上增加属性，可以导致module.exports的变化，如果让exports指向新的地址，不会影响module.exports的变化，最终导出的是module.exports 不是exports
