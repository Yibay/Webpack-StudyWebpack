<h1> Webpack 搭建的 React 脚手架 </h1>

<h2> 脚手架目录结构 </h2>
<h3> src: 前端代码目录 </h3>
+ script.entry.js: Webpack打包的入口文件
+ react/ 用于存放 react的 components、container、actions、reducer
+ views/ 用于存放 html模板
+ style/ 用于存放 非react组件相关的样式文件
+ font/ 用于存放 字体文件<br/>
除入口文件 entry.js外，其他文件可删除，换成自己的项目代码。入口文件也可改写，因为被webpack引用，不要删除。<br/>
<br/>
<h3> node: 后端代码目录 </h3>
<br/>
<h3> config: node代码中，使用的配置文件 </h3>
<br/>
<h2> 终端命令 </h3>
npm install 安装 项目依赖模块<br/>
npm start 启动 开发服务器（保存更新项目代码时，自动编译打包，重启开发服务器，用于开发时使用）<br/>
+ 网址：localhost:3001
npm run build 编译打包，生成文件存放在 dist/ 目录下（用于发布到线上时使用）<br/>
node app.js 启动 项目搭建的node服务器<br/>
+ 网址：localhost:3000
