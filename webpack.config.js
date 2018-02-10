
/*
Configuration for Webpack

Specifies where to pull files from, what loader to use (i.e. babel)
and combines them to an output file. Uses HTMLWebpackPlugin to allow
specification of an HTML template that will be injected with a script
tag referencing the output bundeled JS file.

 */

// requires
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const combineLoaders = require('webpack-combine-loaders');


//constants
const APP_DIR = path.resolve(__dirname, 'src/');

// plugins
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: APP_DIR + '/index.html',
    filename: 'index.html',
    inject: 'body' //where to inject the <script> tag
});

module.exports = {
    entry: APP_DIR+ '/index.js',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader']
            },
            {
                test: /\.scss$/,
                loader: ['style-loader','css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    output: {
        filename :'bundle.js',
        path: __dirname + '/build'
    },
    plugins: [HTMLWebpackPluginConfig]
};