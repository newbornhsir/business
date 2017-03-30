var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config= {
	entry: {//多入口配置
		tabs: './src/app/www/tabs/index.js'
	},
	output: {
		path: path.resolve(__dirname, "publics"),//路径，通过HtmlWebpackPlugin插件生成的html文件存放在这个目录下面
		filename: 'js/[name].bundle.js',//文件名称
		publicPath: '/assets/',//public路径
		/*
		 * chunkFilename配置决定按需加载模块文件的名称
	     * chunkFilename用来打包require.ensure方法中引入的模块,如果该方法中没有引入任何模块则不会生成任何chunk块文件
	     * 比如在main.js文件中,require.ensure([],function(require){alert(11);}),这样不会打包块文件
	     * 只有这样才会打包生成块文件require.ensure([],function(require){alert(11);require('./greeter')})
	     * 或者这样require.ensure(['./greeter'],function(require){alert(11);})
	     * chunk的hash值只有在require.ensure中引入的模块发生变化,hash值才会改变
	     * 注意:对于不是在ensure方法中引入的模块,此属性不会生效,只能用CommonsChunkPlugin插件来提取
		 */
		chunkFilename: 'js/[id].chunk.js'   //chunk生成的配置
	},
	resolve: {
		extensions: ['.js','.vue'],
		alias: {
	      'vue$': 'vue/dist/vue.esm.js',
//	      'vue-router$': 'vue-router/dist/vue-router.esm.js'
	    }
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						
					}
				}
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]?[hash]'
				}
			},
			{
		        test: /\.css$/,
		        use: [ 'style-loader', 'css-loader' ]
		    }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({//多个页面配置html-webpack-plugin
			filename: './app/www/tabs/index.html', //生成的html存放路径，相对于path
			template: 'index.html',//模板路径
			inject: true, //js插入的位置，true/'head'/'body'/false
			hash: true, //为静态资源生成hash值
			chunks: ['tabs'],//需要引入的chunk，不配置就会引入所有页面的资源
			minify: { //压缩HTML文件	
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: false //删除空白符与换行符
			}
		})
	],
	devtool: 'eval-source-map',//异常追踪的模式，详见https://webpack.js.org/configuration/devtool/
	devServer: {
		
	},
	
}
module.exports=config;