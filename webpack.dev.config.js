var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// 要编译的入口文件
	entry: './src/app.js',
	// 编译后，生成文件存放的位置
	output: {
		// 生成文件存放位置
		path: __dirname + '/dist',
		// filename 使用占位符格式时，会按 entry的属性名，编译生成多js文件。
		filename: 'js/[name].bundle.js'
	},
	// 使用loader 预处理载入文件
	module: {
		rules: [
			{
				test: /\.html/,
				loader: 'html-loader'
			},
			{
				// 正则 匹配的文件 后缀
				test: /\.js$/,
				// 正则 不匹配的 文件夹
				exclude: /node_modules/,
				// 对应loader 处理
				loader: 'babel-loader',
				// 查询参数
				query: {
					// babel 预置es版本
					presets: ['latest']
				}
			},
			{
				test: /\.css$/,
				// importLoaders css中@important 进来的文件，从css-loader后(书写位置)第几个loader开始处理
				loader: 'style-loader!css-loader?importLoaders=1!postcss-loader'
			},
			{
				test: /\.scss/,
				// sass-loader 会处理 @important 进来的文件，所以不用css-loader后 加importLoaders
				loader: 'style-loader!css-loader!postcss-loader!sass-loader'
			},
			{
				test: /\.(jpg|png|gif|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							// < limit 用base64，> limit 用name中的路径+名称
							limit: 20000,
							// name 设置 
							// 		1、图片相对 output.path 生成打包图片路径，
							// 		2、也是设置 html中，url内相对路径
							//		（结论：所以html-webpack-plugin中，html要在生成在 根路径，否则 生成的图片 和 url引用的图片路径不统一。）
							//		path 引入文件的相对路径
							//		name 引入文件名
							//		ext 引入文件后缀
							name: '[path][name].[ext]'
						}
					},
					{
						// 压缩图片大小
						loader: 'img-loader'
					}
				]
			}
		]
	},
	// 引入插件
	plugins: [
		new htmlWebpackPlugin({
			// 生成html文件名（html要在生成在 根路径，否则 file-loader生成的图片 和 url引用的图片路径不统一。）
			filename: 'index.html',
			// 构建html的模板
			template: 'index.html',
			// js插入位置
			inject: 'body',
			// 向 html模版传入 自定义参数
			title: '测试打标签2',
			// 压缩代码
			minify: {
				// 移除 html注释
				removeComments: true
			}
		})
	]
}