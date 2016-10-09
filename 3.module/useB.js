var b = require('./b.js'); //io操作
//删除缓存
delete require.cache[require.resolve('./b.js')];
//通过缓存将缓存中唯一的模块删除
var b = require('./b.js'); //io操作

//console.log(b); //return node_modules
//多次引用只会加载一次,require的方法是同步的

//node加载同一个模块可以将模块缓存下来，下次用的时候不需要再加载了
console.log(require.cache); //存储模块的缓存
console.log(require.resolve('./b.js')); //解析出一个绝对路径来

