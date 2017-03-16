const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');//路径
const webpack = require('webpack');
const plugins = [];//webpack插件


plugins.push( new HtmlWebpackPlugin({ 
	template : './index.html',//指定模板文件
	minify : { removeAttributeQuotes: true }, //压缩并移除属性的引号
	hash: true //给生成的js文件一个唯一的hash值
}));

module.exports = {
	entry:  './examples/js/index.js', //入口文件
	output: { //打包输出的文件
		path: path.resolve(__dirname,'examples/dist'), //打包文件存放的绝对路径
		filename: 'bundle.js' //打包后的文件名
	},
	module: {
		loaders: [

		]
	},
	plugins:plugins
}