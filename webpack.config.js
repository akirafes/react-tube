const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, './public');
const APP_DIR = path.resolve(__dirname, './src/app');

let ExtractTextPlugin = require('extract-text-webpack-plugin');


let config = {
    entry: [ APP_DIR + '/index.js'],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devtool: "source-map", // any "source-map"-like devtool is possible
    module : {
        loaders : [

            {
                test : /\.jsx?/,
                include : APP_DIR,
                exclude: /node_modules/,
                loader : 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ],
    devServer: {
        publicPath: "/",
        contentBase: "./public",
        hot: true
    }
};

module.exports = config;