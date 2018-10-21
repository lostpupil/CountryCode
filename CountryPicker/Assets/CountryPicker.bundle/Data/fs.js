var fs = require('fs'),
path = require('path');

//readFile(filename,[options],callback);

/**
 * filename, 必选参数，文件名
 * [options],可选参数，可指定flag（文件操作选项，如r+ 读写；w+ 读写，文件不存在则创建）及encoding属性
 * callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
 */

fs.readFile(__dirname + '/country.js', {flag: 'r',encoding:'utf-8'}, function (err, data) {
   if(err) {
    console.error(err);
    return;
    }
    console.log(data);
    console.log('读取成功')
});


var w_data =new Buffer('此处可以增加功能');
/*a 以追加方式写入文件*/
fs.writeFile(__dirname + '/country.js', w_data, {flag: 'a'}, function (err) {
   if(err) {
        console.error(err);
    } else {
        console.log('写入成功');
    }
});
