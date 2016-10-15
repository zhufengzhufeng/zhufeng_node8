var fs  = require('fs');
fs.writeFileSync('./1.txt',123);
//默认写入的编码是utf8
//默认创建
//将提供的数据放在第二个参数上
//fs.appendFileSync(''); 实现是调用了writeFileSync + flag:'a'
fs.writeFile('./1.txt',123,function(err){
    console.log(err);//写入是否有错误
});

