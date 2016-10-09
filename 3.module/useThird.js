
//require('jiangwpacks');//会默认去找node_modules文件夹，找同名的文件，会默认执行index.js,会找index.json,再找package.json main

console.log(module.paths);
//1.先查找package.json main 如果main文件对应的存在则找到
//2.如果1没有找index.js / index.json 如果没有
//3.通过module.paths继续进行查找，继续1的操作，找不到报错


//引用文件问题
//b.js b.json
//b


//核心模块 node自带的为核心模块 例如http fs url