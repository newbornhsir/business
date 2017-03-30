## multi pages with vue and webpack
### 搭建开发环境
- 生成package.json文件

`npm init`

- 安装依赖

` npm install webpack vue vue-router --save-dev`
` vue-loader css-loader style-loader file-loader babel-core babel-loader babel-preset-latest --save`
项目是基于webpack+vue，vue-loader加载组件，vue-router处理路由,
css-loader+style-loader处理样式,babel-*处理.js文件。webpack做模块化处理。这是目前想到的。安装中提示

    preset-latest accomplishes the same task as babel-preset-env.lease install it with 'npm install babel-preset-env --save-dev'. '{ "presets": ["latest"] }' to '{ "presets": ["env"] }'

安装babel-reset-env
    

- 新建src目录，src目录为开发目录，src目录下有src/js，src/css,src/app....等目录。

- 新建webpack.config.js
	<pre>
	var path = require('path');
	var webpack = require('webpack')
	var config= {
		entry: {//多入口配置
			tabs: './src/app/www/tabs/index.js'
		},
		output: {
			path: path.resolve(__dirname,'static'),//路径，通过HtmlWebpackPlugin插件生成的html文件存放在这个目录下面
			filename: 'js/[name].bundle.js',//文件名称
			publicPath: '/assets/',//public路径
			/*
			 * chunkFilename配置决定按需加载模块文件的名称
		     * chunkFilename用来打包require.ensure方法中引入的模块,如果该方
		     * 法中没有引入任何模块则不会生成任何chunk块文件
		     * 比如在main.js文件中,require.ensure([],function(require)
		     * {alert(11);}),这样不会打包块文件
		     * 只有这样才会打包生成块文件require.ensure([],function
		     * (require){alert(11);require('./greeter')})
		     * 或者这样require.ensure(['./greeter'],function(require)
		     * {alert(11);})
		     * chunk的hash值只有在require.ensure中引入的模块发生变化,hash值
		     * 才会改变
		     * 注意:对于不是在ensure方法中引入的模块,此属性不会生效,只能用
		     * CommonsChunkPlugin插件来提取
			 */
			chunkFilename: 'js/[id].chunk.js'   //chunk生成的配置
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
			
		]
	}
	module.exports=config;
  </pre>
执行`webpack --config webpack.config.js`

- html-webpack-plugin来加载html页面

`npm install html-webpack-plgin`

安装完成出现提示

`vue-loader@11.3.4 requires a peer of vue-template-compiler@^2.0.0 but none was installed.`

安装`npm install vue-template-compiler --save`

- 开发环境配置

	1. `npm install webpack-dev-server --save`
	2. 配置devtool和devServer
	3. 安装[corss-env](https://npm.taobao.org/package/cross-env)
	
		解决不同系统下`NODE_ENV=production`命令行不同之类的问题
	4. 修改package.json

		<pre>
			"scripts": {
			    "dev": "cross-env NODE_ENV=development webpack-dev-server --open --hot",
			    "build": "cross-env NODE_ENV=production webpack --progress --hide-modules"
			  },
		</pre>
	5. 在tabs/index.js文件中输入`console.log("hello world")`，执行`npm run dev`,在http://localhost:8080/assets/app/www/tabs/index.html#/可以看到效果

- 配置vue-loader+vue-router
	
	1. 模板html中`<div id="app"></div>`
	2. index.js中
	
		<pre> 
			import Vue from 'vue';
			import router from './router';
			import App from './App';
			
			new Vue({
				el: "#app",
				router,
			  	template: '<App/>',
			  	components: { App }
			})
		</pre>
		
报错`Module not found: Error: Can't resolve './App' `

修改 `import App from './App.vue'`,正常,修改webpack.config.js,添加

<pre>
	resolve: {
		extensions: ['.js','.vue'],
	},
</pre>

修改 `import App from './App'`,正常，现在可以正常解析组建了，但是出现了一个vue warn

<pre>
[Vue warn]: You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build. 
(found in <Root>)
</pre>

百度发现是引入的vue的路径不对导致的[详情](https://segmentfault.com/a/1190000006435886),html文档找不到`<div id="app">`

修改webpack.config.js,resolve中添加

<pre>
	alias: {
	   'vue$': 'vue/dist/vue.esm.js',//看cli创建项目中添加的就是这个路径
	}
</pre>

问题解决，找到 `<div id="app">`



