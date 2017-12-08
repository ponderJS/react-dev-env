process.env.NODE_ENV = 'production';

let webpack = require('webpack'),
    webpackConfig = require('./webpack.config.js'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    CopyWebpackPlugin = require('copy-webpack-plugin');

// 根据配置生成多页面应用
Object.keys(webpackConfig.entry).forEach(function (d) {
    let opt = {
        chunks: [d],
        filename: d + '.html',
        template: './template.ejs',
        time: new Date().toLocaleDateString()+' '+new Date().toLocaleTimeString()
    }
    webpackConfig.plugins.push(new HtmlWebpackPlugin(opt));
});

// 压缩
if (process.argv[2] == 'compress') {
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: true
    }));
}

webpackConfig.plugins.unshift(new CleanWebpackPlugin('./build'));
webpackConfig.plugins.push(new CopyWebpackPlugin(
    [
        { from: './fonts', to: 'fonts/' },
        { from: './img', to: 'img/' },
        { from: './lib', to: 'lib/' }
    ],
    {
        copyUnmodified: true
    }
));

let releaseDate=(function(){
    var date=new Date(),n=date.getDate();
	return date.getFullYear().toString()+(date.getMonth()+1)+(n>10?n:'0'+n);
})();


// 编译
webpack(webpackConfig).run(function (err, stats) {
    if (err) {
        throw (err);
    }
    console.log('Compiled successfully!');
});