/* global __dirname */
var webpack = require("webpack");

module.exports = {
	mode: "none",
	entry: [
		"./src/index.ts"
	],
	output: {
		path: __dirname + "/dist",
		publicPath: "http://localhost:8080/",
		filename: "index.js",
		libraryTarget: "umd",
    	//library: "react-vscrollview",
	},
	resolve: {
		//root: paths.client(),
		//root: "src",
		extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
	},
	externals: {
		// use external version of React (ie, don't bundle react, since any app using this library will already have it available)
		//"react": "React",
		"react": "commonjs react",
		"react-dom": "commonjs react-dom",
		"react-vextensions": "commonjs react-vextensions",
    },
    /*module: {
        noParse: ["react"]
    },*/
    module: {
		rules: [
			{
				test: /\.(jsx?|tsx?)$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["es2015", "react"]
				}
			},
			{test: /\.tsx?$/, loader: "ts-loader"},
		]
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		//new webpack.IgnorePlugin(/react/),
	]
};