'use strict'

// 载入依赖模块
var Koa = require('koa');
var logger = require('koa-logger');
var session = require('koa-session');
var bodyParse = require('koa-bodyparser');
var koaStatic = require('koa-static');

// 建立koa实例
var app = new Koa();

// 使用中间件
app.keys = ['koa-full-stack'];
app.use(logger());
app.use(session(app));
app.use(bodyParse());
// 设置静态文件 根路径
// 即：为此根目录下的 静态文件 匹配路由。
// 匹配规则为 html中url 对应 __dirname + '/dist/static' ＋ html中相对路径str 的文件
app.use(koaStatic(__dirname + '/dist/static'));

// 引入router
var router = require('./config/routes')();
app
	.use(router.routes())
	.use(router.allowedMethods())

// 监听端口
app.listen(3000);
console.log('listening: 3000');