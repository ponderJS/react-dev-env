process.env.NODE_ENV = 'production';

let webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


// 根据配置生成多页面应用
Object.keys(webpackConfig.entry).forEach(function (d) {
    let opt = {
        chunks: [d],
        filename: d + '.html',
        template: './template.ejs'
    }
    webpackConfig.plugins.push(new HtmlWebpackPlugin(opt));
});

// 压缩
if(process.argv[2] == 'compress'){
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: true
    }));
}

// 编译
webpack(webpackConfig).run(function (err, stats) {
    if (err) {
        throw(err);
    }
    console.log('Compiled successfully!');
    console.log('注意：还需将字体、图片、类库等文件复制到打包目录！');
});