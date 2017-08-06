// controller层
'use strict'

var fs = require('fs');

exports.home = async function(ctx, next){
    ctx.response.type = 'text/html';
    // fs.readFileSync 同步读取文件
    // __dirname 获取当前路径
	ctx.response.body = fs.readFileSync(__dirname + '/../../dist/index.html');
}