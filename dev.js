process.env.NODE_ENV = 'development';

let pages = [],
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    WebpackDevServer = require('webpack-dev-server');


// 根据配置生成多页面应用
Object.keys(webpackConfig.entry).forEach(function (d) {
    let opt = {
        chunks: [d],
        filename: d + '.html',
        template: './template.ejs',
        time: new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString()
    }
    webpackConfig.plugins.push(new HtmlWebpackPlugin(opt));

    // 多页面路径
    if(d!='index'){
        pages.push({ from: new RegExp('^\\/' + d + '$', 'i'), to: '/' + d + '.html' });
    }

});

// 启动服务
new WebpackDevServer(webpack(webpackConfig), {
    contentBase: './',
    historyApiFallback: {
        rewrites: pages
    },
    proxy: {
        '/api': ''
    }
}).listen(9090);
