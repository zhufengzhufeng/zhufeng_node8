var fs = require('fs');
//fs.mkdirSync('a/b/c/e/f/g');
//创建目录 必须要保证父级存在才可以创建
function makep(dir) {
    var dirArrs = dir.split('/');
    dirArrs.forEach(function (item,index) {
        var exists = fs.existsSync(dirArrs.slice(0,index+1).join('/'));
        if(!exists)
        fs.mkdirSync(dirArrs.slice(0,index+1).join('/'));
        //a  a/b  a/b/c /a/b/c/e   /a/b/c/e/f
    });
}
//创建之前要判断文件夹是否存在
//makep('a/b/c/e/f/g');
//作业 myconcat base64 异步创建文件夹 回调函数 ->递归
//异步写法 异步判断是否存在
fs.exists('./ab',function (exits) {
    console.log(exits);
});

//readFileSync readFile
//writeFileSync writeFile
//appendFileSync appendFile
//mkdirSync mkdir
//existSync exist
//stat   statSync
//readdirSync readdir
