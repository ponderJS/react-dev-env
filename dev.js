process.env.NODE_ENV = 'development';

let webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    WebpackDevServer = require('webpack-dev-server');

// 启动服务
new WebpackDevServer(webpack(webpackConfig), {
    contentBase: __dirname,
    historyApiFallback: {
        verbose: true
    },
    proxy: {
        '/api': '/api'
    }
}).listen(9090);
