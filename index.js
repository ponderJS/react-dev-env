let path=require('path'),
    webpack=require('webpack'),
    webpackConfig=require('./webpack.config.js'),
    pageConfig=require('./page.config.js'),
    apiConfig=require('./api.config.js'),
    HtmlWebpackPlugin=require('html-webpack-plugin');


Object.keys(webpackConfig.entry).forEach(function(d){
    let opt={};
    // 页面标题
    opt.title=pageConfig[d]&&pageConfig[d].title;
    // 页面模版
    opt.template='./template.ejs';
    // 页面逻辑
    opt.chunks=[d];
    // hash
    opt.hash=true;
    // 根据模版生成不同页面
    (function(dev,name){
        let prepath=name=='index'?'':'../';
        if(dev){
            // 开发模式下编译后的js文件都在根目录下
            opt.filename=name=='index'?'index.html':name+'/index.html';
        }else{
            // 此处需指定为绝对路径
            opt.filename=path.resolve(__dirname,'build',name=='index'?'index.html':name+'/index.html');
        }
        // 页面标志
        opt.icon=prepath+'img/favicon.ico';
        opt.css=(pageConfig[d]&&pageConfig[d].css||[]).map(function(m){
            return prepath+'css/'+m;
        });
        opt.lib=(pageConfig[d]&&pageConfig[d].lib||[]).map(function(m){
            return prepath+'lib/'+m;
        });
    })(process.env.NODE_ENV=='development',d);
    
    webpackConfig.plugins.push(new HtmlWebpackPlugin(opt));
});

if(process.env.NODE_ENV=='production'){
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: true
    }));
}


// 开发
if(process.env.NODE_ENV=='development'){
    let express=require('express'),
        server=express(),
        open=require('open');
        WebpackDevMiddleware = require('webpack-dev-middleware'),
        proxy = require('http-proxy-middleware'),
        apiServer=proxy('/api',{
            target: apiConfig.server,
            changeOrigin: true
        }),
        compiler=webpack(webpackConfig);

    server.use(express.static('app'));

    server.use('/api', apiServer);

    server.use(WebpackDevMiddleware(compiler, {
        stats: { colors: true }
    }));

    server.listen('8080',function(){
        console.log('Develop server listening on 8080');
        try{
            open('http://localhost:8080/','google chrome');
        }catch(e){
            open('http://localhost:8080/');
        }
    });

}else{
    // 打包
    build();
}

function build(){
    let compiler=webpack(webpackConfig)
        fse=require('fs-extra'),
        chalk=require('chalk');
    fse.emptyDirSync('./build');
    fse.copy('./app','./build',{
        filter:function(fillname){
            if(/\/js|\.jsx$/i.test(fillname)){
                return false;
            }
            return true;
        }
    }).then(function(){
        return new Promise(function(resolve,reject){
            compiler.run(function(err,stats){
                if(err){
                   return reject(err);
                }
                return resolve({stats});
            });
        }).then(function(res){
            console.log(chalk.green('编译成功'));
        },function(err){
            console.log(chalk.red(err));
        });
    }).catch(function(err){
        console.log(chalk.red(err));
    });

}
