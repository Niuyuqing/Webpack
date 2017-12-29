module.exports = {
	entry:__dirname+'/src/js/main.js',
	output:{
		path:__dirname+'/dist/js',
		filename:'bundle.js'
	},
	module: {
		rules: [{
			test: /\.less$/,
			loader:"style-loader!css-loader!less-loader"
		}]
	}
};
