process.env.NODE_ENV = process.argv.slice(2).length ? process.argv.slice(2)[0] : "development";

const proxyServer = {
    '/api': 'http://192.168.1.15:9882'
};

let path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    webpackConfig = require('./webpack.config.js'),
    folder = path.parse(webpackConfig.output.path).base,
    pages = require('./pages.js');

// 根据配置生成多页面应用
pages.forEach(function (d) {
    // 多页面入口
    let entryKey = path.parse(d.entry).name;
    webpackConfig.entry[entryKey] = d.entry;
    // 页面插件配置
    let opt = {};
    // 页面插件模版
    opt.template = './template.ejs';
    // 页面文件
    opt.filename = process.env.NODE_ENV == 'development' ? path.join(d.route, 'index.html') : path.resolve(folder, d.route, 'index.html');
    // 公用类库
    opt.lib = d.lib.map(function (js) {
        let js_path = process.env.NODE_ENV == 'development' ? path.resolve(js) : path.resolve(folder, js.replace(/\.js$/i, '.min.js'));
        return path.relative(path.parse(opt.filename).dir, js_path);
    });
    // 打包文件
    opt.chunks = [entryKey];
    webpackConfig.plugins.push(new HtmlWebpackPlugin(opt));
});

// css插件
webpackConfig.module.rules.push({
    test: /\.css/i,
    use: ExtractTextPlugin.extract({
        use: ["css-loader"]
    })
});
webpackConfig.plugins.push(new ExtractTextPlugin({
    filename: '[name].css'
}));

// 开发
if (process.env.NODE_ENV == 'development') {
    let compiler = webpack(webpackConfig),
        WebpackDevServer = require('webpack-dev-server'),
        WebpackDevMiddleware = require('webpack-dev-middleware');

    new WebpackDevServer(compiler, {
        contentBase: './',
        open: true,
        proxy: proxyServer
    }).listen('9090', 'localhost')

} else {
    // 压缩 
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: true
    }));
    let compiler = webpack(webpackConfig);
    // 运行
    compiler.run(function (err, stats) {
        if (err) {
            console.error(err);
        }
        console.log('Compiled successfully!');
    });
}