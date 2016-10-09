//将文件 先读出 在写入内容
function read(callback) {
    setTimeout(function () {
        console.log('读');
        callback();
    },3000);
}
function write() {
    console.log('写入');
}
read(write); //将后续路基传递到函数中
