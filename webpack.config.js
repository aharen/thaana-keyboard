'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
	mode: 'production',
	entry: path.join(__dirname, '/src/index.js'),
	output: {
		library: 'thaanaKeyboard',
		libraryTarget: 'umd',
		filename: 'thaana-keyboard.min.js',
		path: path.resolve(__dirname, 'dist'),
	},
}