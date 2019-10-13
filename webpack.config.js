'use strict'

const webpack = require('webpack')
const path = require('path')

module.exports = {
	mode: 'production',
	entry: {
		app: './src/index.js',
	},
	output: {
		filename: 'thaana-keyboard.bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
}