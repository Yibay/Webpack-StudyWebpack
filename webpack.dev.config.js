const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
    	// 仅在 启动 webpack-dev-server 时，hot更新（'webpack/hot/only-dev-server'）
        // entry 中，相对路径 必须用 ./ 开头
        main: './src/script/entry.js'
    },
    output: {
        // 打包生成文件的 根路径
        path: __dirname + '/dist/static/',
        // 1. 生成html文件中，引用此 js时，前置路径
        // webpack publicPath 配合 koa-static, 把静态文件都匹配路由，暴露出去
        //   而 html等，页面入口，不被暴露

        // 2. publicPath 设为 绝对路径前缀。
        // 这样koa-static 暴露出去的 静态文件 都能在 webpack打包文件中，准确被路由到。
        // 而不受 html文件的 path 影响，出现404
        publicPath: '/',
        // filename 只允许 相对路径。。。
        filename: 'js/[name].js'
    },
    // 自动解析 import 文件
    resolve: {
        // 当为找到 import文件时，自动补全 import 文件 扩展名（后缀）再次查找
        // 补全 优先级 顺序为 从左到右（即 第1次没找到，补.js; 第2次又没找到，补.jsx）
        extensions: ['.js', '.jsx']
    },
    // 源代码 map (开发工具)
    // 开发调试时，可以 debug 到 webpack 打包前的 源代码，便于调试。
    devtool: 'source-map',
    // 热部署（代码变更，自动重启 服务器）
    devServer: {
    	// 设置 根路径 index.html 页面路由，默认为 __dirname
        contentBase: __dirname,
        historyApiFallback: true,
        inline: true,
        port: 3001
    },
    plugins: [
        new htmlWebpackPlugin({
            // 通过../ 使html 生成在 打包文件根路径的上层
            filename: '../index.html',
            template: 'src/views/index.html'
        })
    ],
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                	{
                		// react 热更新，否则 jsx 更新时 debug
                		loader: 'react-hot-loader'
                	},
	                {
	                    loader: 'babel-loader',
	                    options: {
	                        // 引入 解析jsx语法 的预置模块
	                        presets: [
	                            ['latest'],
                                ['stage-2'],
	                            ['react']
	                        ],
	                        plugins: ['transform-runtime']
	                    }
	                }
                ]
            },
            {
                test: /\.css$/,
                // 新特性 use 代替 loader
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        // 解析时，遇到 @import时，退到前一loader（postcss-loader）处理
                        options: {
                            importLoaders: 1
                            // css文件 因为有iconfont.css的关系，使用modules: true会报错
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            // 预处理 css中，配置 自动加兼容前缀 plugin
                            plugins: loader => [require('autoprefixer')()]
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // 启用 css模块化
                            modules: true,
                            // 启用 css模块化的sourceMap
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: loader => [require('autoprefixer')()]
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                // 把 字体 svg 与 图片 svg 区分开
                test: /iconfont\.(eot|svg|ttf|woff)$/,
                use: [{
                        loader: 'url-loader',
                        options: {
                            // 可以设置 outputPath、publicPath
                            name: 'font/[name].[ext]',
                            // 小于 8192 Byte，使用 base64编码
                            limit: 8192
                        }
                    },
                    {
                        loader: 'img-loader'
                    }
                ],
            },
            {
                // 字体图标，用了 svg，这里就不能用 svg了，否则，会再生成一个
                test: /\.(jpg|jpeg|png|gif)$/,
                use: [{
                        loader: 'url-loader',
                        options: {
                            // 防止 image同名、用[hash]区分下 
                            // [hash] 根据图片内容 生成
                            name: '[name][hash].[ext]',
                            // outputPath: 用于存放 图片
                            // output.path 后；
                            // file-loader.name 前;
                            // 加的 字段。
                            outputPath: 'images/',
                            // publicPath: 用于 对外暴露url
                            // 例：import time_png from './images/time.png';
                            // time_png 为 publicPath + outputPath + name
                            // 即：/images/src/react/components/Footer/images/time.png
                            publicPath: '/',
                            limit: 8192
                        }
                    },
                    {
                        loader: 'img-loader'
                    }
                ]
            }
        ]
    }
}