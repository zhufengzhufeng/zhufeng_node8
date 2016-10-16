var fs = require('fs');
var ws = fs.createWriteStream('./name.txt',{highWaterMark:3});
var i = 0;
var flag = true;
w();
function w() {
    //012 345 678 910 111 213 141 5
    while(i<2&&flag){ //当i不大于10时，并且能吃的下就继续喂我
        flag = ws.write(i+++'');
}
}
//当我把嘴里的都吃完了，你可以继续喂我了
ws.on('drain',function () {
    console.log('大爷吃好了');
    flag = true;
    w();
});
//等我消化好后 是不是仍要执行write方法

//写入的内容一定不会丢失
//正常的理论 吃 如果吃不下了，你就不要再喂了，等我消化后再喂我

//嘴代表的是写入的内存 ，希望不要扔到电脑的内存区中防止，淹没可用内存