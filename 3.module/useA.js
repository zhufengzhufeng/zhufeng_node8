//在这里使用a.js 应用+ - 使用+ - 的方法

var calc = require('./a.js'); //{calc:calc}
console.log(calc['+'](1,2));
//如果要是引用数据类型的导出使用  module.exports