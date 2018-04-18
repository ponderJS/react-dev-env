process.env.NODE_ENV = 'production';

let webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

// 压缩
webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: true }));
// 清理
webpackConfig.plugins.unshift(new CleanWebpackPlugin(webpackConfig.output.path));

// 编译
webpack(webpackConfig).run(function (err, stats) {
    if (err) {
        throw (err);
    }
    console.log('Compiled successfully!');
});