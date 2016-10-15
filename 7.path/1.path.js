var path = require('path');
//node提供处理路径的模块
//创建出a.js这样一个绝对路径 (拼接路径)
console.log(path.join(__dirname,'a.js','b.js'));
//path.basename/path.extname
console.log(path.basename('e.min.js','.min.js'));//基本路径
console.log(path.extname('e.min.js'));//扩展名
console.log(require.resolve('./2.js'));
//require必须存在才能调用resolve
console.log(path.resolve('3.js'));//用来解析路径的，路径不需要 必须存在