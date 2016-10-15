//状态信息
var fs = require('fs');
var stat = fs.statSync('./a');
console.log(stat);
/*
 atime: 2016-10-15T08:34:45.235Z, 访问的时间access
 mtime: 2016-10-15T08:34:45.235Z, 修改的时间 modify
 ctime: 2016-10-15T08:34:45.235Z, 修改的时间
 change(上次的值和下次的值要有变化)
 birthtime: 2016-10-15T08:34:45.235Z 创建时间
 */
//fs.readdirSync
var files = fs.readdirSync('a');
console.log(files);//文件的所有信息（只是子辈的）
//将a文件夹下所有文件夹（不能包含内容）和文件删除
files.forEach(function (item) {
    if(fs.statSync('a/'+item).isFile()){
        fs.unlinkSync('a/'+item);
    }else if(fs.statSync('a/'+item).isDirectory()){
        fs.rmdirSync('a/'+item);
    }//是文件夹
     //判断是文件夹还是目录
});