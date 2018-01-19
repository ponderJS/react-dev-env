process.env.NODE_ENV = 'development';

let path = require('path'),
    webpack = require('webpack'),
    appConfig = require('./app-config.json'),
    webpackConfig = require('./webpack-config.js'),
    WebpackDevServer = require('webpack-dev-server');

// 启动服务
new WebpackDevServer(webpack(webpackConfig), {
    contentBase: [path.join(__dirname), path.join(__dirname, 'app')],
    historyApiFallback: {
        verbose: true
    },
    proxy: {
        '/api': appConfig.API_HOST
    }
}).listen(9090);
