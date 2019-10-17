'use strict'

const webpack = require('webpack')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: path.join(__dirname, '/src/index.js'),
	output: {
		library: 'thaanaKeyboard',
		libraryTarget: 'umd',
		filename: 'thaana-keyboard.min.js',
		path: path.resolve(__dirname, 'dist'),
	},
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()],
	}
}