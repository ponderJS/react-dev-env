process.env.NODE_ENV = 'development';

let port = 9090,
    open = require('opn'),
    address = require('ip').address(),
    platform = require('os').platform(),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    WebpackDevServer = require('webpack-dev-server');

// 开发环境统一部署为本地地址
let publicPath = `http://${address}:${port}/`;
webpackConfig.output.publicPath = publicPath;
// 编译自动刷新页面
webpackConfig.entry.vendor.push('webpack-dev-server/client');

// 启动服务
new WebpackDevServer(webpack(webpackConfig, callback), {
    contentBase: __dirname + '/src',
    historyApiFallback: {
        verbose: true
    },
    proxy: {
        '/api': 'http://xxx.xxx.xxx.xxx:8080/'
    }
}).listen(9090);

function callback() {
    open(publicPath, { app: platform.toLowerCase() === 'win32' ? 'chrome' : 'google chrome' });
}