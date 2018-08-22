'use strict';
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry:{
        main: path.join(__dirname,"../src/index.js"),
        common:['react','react-dom']
    },
    output:{
        path:path.join(__dirname,"../bulid"),
        filename:"[name].js",
    },
    resolve:{
        extensions:['.js','.jsx','.json','.css','.less','sass','scss'],
    },
    performance: {
        hints: false
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)?$/,
                exclude:/(node_modules)/,
                loader:'babel-loader'
            },{
                test: /\.css$/,
                use:[
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },{
            test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }]
            },{
            test:/\.html$/,
                use:[{
                        loader:'html-loader',
                        options: {minimize: true}
                    }]
            },{
                test: /\.(ico)$/,
                use:"raw-loader"
            },
            {
                test:/\.(svg|png|jpg|ico|ttf|woff)$/,
                use:'file-loader'
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'less-loader'
                }]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "../public/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}