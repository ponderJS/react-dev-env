process.env.NODE_ENV = process.argv.slice(2).length ? process.argv.slice(2)[0] : "development";


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
    let entryKey=path.parse(d.entry).name;
    webpackConfig.entry[entryKey]=d.entry;
    // 页面插件配置
    let opt = {};
    // 页面插件模版
    opt.template = './template.ejs';
    // 页面文件
    opt.filename = process.env.NODE_ENV == 'development'? path.join(d.route,'index.html') : path.resolve(folder,d.route,'index.html');
    // 公用类库
    opt.lib = d.lib.map(function(js){
        let js_path=process.env.NODE_ENV == 'development'?path.resolve(js):path.resolve(folder,js.replace(/\.js$/i,'.min.js'));
        return path.relative(path.parse(opt.filename).dir,js_path);
    });
    // 打包文件
    opt.chunks = [entryKey];
    webpackConfig.plugins.push(new HtmlWebpackPlugin(opt));
});

webpackConfig.module.rules.push({
    test: /\.css/i,
    use: ExtractTextPlugin.extract({
        use: ["css-loader"]
    })
});

webpackConfig.plugins.push(new ExtractTextPlugin({
    filename:'[name].css'
}))



// 开发
if (process.env.NODE_ENV == 'development') {
    let express = require('express'),
        server = express(),
        open = require('open'),
        WebpackDevMiddleware = require('webpack-dev-middleware'),
        proxy = require('http-proxy-middleware'),
        // apiServer = proxy('/api', {
        //     target: apiConfig.server,
        //     changeOrigin: true
        // }),
        compiler = webpack(webpackConfig);

    server.use(express.static('./'));

    // server.use('/api', apiServer);

    server.use(WebpackDevMiddleware(compiler, {
        stats: { colors: true }
    }));

    server.listen('8090', function () {
        console.log('Develop server listening on 8090');
        try {
            open('http://localhost:8090/', 'google chrome');
        } catch (e) {
            open('http://localhost:8090/');
        }
    });

} else {
    // 压缩 
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: true
    }));
    // 打包
    let compiler = webpack(webpackConfig);
    compiler.run(function (err, stats) {
        if (err) {
            console.error(err);
        }
        console.info('编译成功');
    });
}