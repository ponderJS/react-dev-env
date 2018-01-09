process.env.NODE_ENV = 'development';

let path = require('path'),   
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    WebpackDevServer = require('webpack-dev-server');

// 启动服务
new WebpackDevServer(webpack(webpackConfig), {
    contentBase: [path.join(__dirname),path.join(__dirname,'app')],
    historyApiFallback: true,
    proxy: {
        '/api': ''
    }
}).listen(9090);
