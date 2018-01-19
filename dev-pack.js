process.env.NODE_ENV = 'production';

let webpack = require('webpack'),
    appConfig = require('./app-config.json'),
    webpackConfig = require('./webpack-config.js'),
    WebpackDevServer = require('webpack-dev-server'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

// 压缩
webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: true }));
// 清理
webpackConfig.plugins.unshift(new CleanWebpackPlugin('./build'));
// 复制
webpackConfig.plugins.push(new CopyWebpackPlugin(
    [
        { from: './app/fonts', to: 'fonts/' },
        { from: './app/images', to: 'images/' },
        { from: './app/libs', to: 'libs/' }
    ],
    {
        copyUnmodified: true
    }
));

new WebpackDevServer(webpack(webpackConfig), {
    contentBase: webpackConfig.output.path,
    historyApiFallback: {
        verbose:true
    },
    proxy: {
        '/api': appConfig.API_HOST
    }
}).listen(9090);