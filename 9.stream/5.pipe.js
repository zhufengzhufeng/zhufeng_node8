//copy pipe
var fs = require('fs');
function AsynCopy(source,target) {
    var rs = fs.createReadStream(source);
    var ws = fs.createWriteStream(target);
    rs.pipe(ws); //异步，不会淹没可用内存
    //ws.write();ws.end();
}
AsynCopy('./name.txt','./name1.txt');