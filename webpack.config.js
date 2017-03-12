const path =  require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/Index.html',
  filename: 'Index.html',
  inject: 'body'
})

module.exports = {
	context: __dirname,
	entry: './client/BrowserEntry',
	output:{
		path: path.resolve(__dirname,'public'),
		filename : 'bundle.js',
		publicPath: path.resolve(__dirname,'public')
	},
	resolve: {
      extensions: ['.js', '.jsx']
    },
	module : {
		rules : [
			{
				test: /\.jsx?$/,
	        	exclude: [/node_modules/],
	        	use: [{
		          loader: 'babel-loader',
		          options: { presets: ['es2015',"react"] }
		        }],
			}		
		]
	},
	devServer: {
	    host: '0.0.0.0',
	    port: 5050
	},
	// add this line
	plugins: [HtmlWebpackPluginConfig]
}