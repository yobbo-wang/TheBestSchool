const webpack = require("webpack");
const path = require("path");
const merge = require("webpack-merge");
const webpackConfigBase = require("./webpack.base.config");
const openBrowserPlugin = require('open-browser-webpack-plugin');

const webpackConfigDev = {
    mode:'development',
    plugins:[
        new openBrowserPlugin({url:"http://127.0.0.1:3000"})
    ],
    devServer:{
        contentBase: path.join(__dirname,"../public"),
        hot: true,
        host: '0.0.0.0',
        inline: true,
        port: 3000
    }
}
module.exports = merge(webpackConfigBase, webpackConfigDev);