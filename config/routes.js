// router 层
'use strict'

// 载入依赖模块
var Router = require('koa-router');
var App = require('../node/controller/app');


module.exports = function(){
	
	var router = new Router({
		prefix: ''
	});

	// URL mapping Controller
	router.get('/', App.home);

	return router;

}