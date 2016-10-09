//可以直接访问的属性
//1. 全局变量可以直接使用
//2. 形参可以直接使用
//当前文件的目录 （绝对路径）
console.log(__dirname);
//当前文件的绝对路径
console.log(__filename);  //这两个__dirname不能更改





//exports 导出
//require 需要
//module 模块

/*function (exports,require,module,__dirname,__filename) {
    4.全局变量.js
}*/


//__dirname 和process.cwd();
//current working directory 工作目录是可以更改的
console.log(process.cwd());
console.log(__dirname);
//change directory
process.chdir('../');
console.log(process.cwd());
console.log(__dirname);



