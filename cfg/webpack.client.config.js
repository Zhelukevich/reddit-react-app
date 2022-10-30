const path = require('path')
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global.css$/;
const DEV_PLUGINS = [new CleanWebpackPlugin(), new HotModuleReplacementPlugin()];
const COMMON_PLUGINS = [new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` })];

function setupDevtool() {
	if (IS_DEV) {
		return 'eval';
	}

	if (IS_PROD) {
		return false;
	}
}

function getEntry() {
	if (IS_PROD) {
		return [path.resolve(__dirname, '../src/client/index.jsx')];
	}

	return [
		path.resolve(__dirname, '../src/client/index.jsx'),
		'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
	]
}


module.exports = {
	target: "web",
	mode: NODE_ENV ? NODE_ENV : 'development',
	resolve: {
		extensions: ['.jsx', '.js', '.json', '.ts', '.tsx'],
		alias: {
			'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom'
		}
	},

	entry: getEntry(),
	output: {
		path: path.resolve(__dirname, '../dist/client'),
		filename: 'client.js',
		publicPath: '/static/',
	},
	module: {
		rules: [
			{
				test: /\.[jt]sx?$/,
				use: ['ts-loader']
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]__[local]--[hash:base64:5]',

							}
						}
					},
				],
				exclude: GLOBAL_CSS_REGEXP
			},
			{
				test: GLOBAL_CSS_REGEXP,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devtool: setupDevtool(),

	plugins: IS_DEV ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS,
}
