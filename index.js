var fs=require('fs');
var webpack=require('webpack');
var config=require('./webpack.config.js');

fs.exists('./build',function(boolean){
    if(!boolean){
        fs.mkdirSync('./build');
    }
    webpack(config,function(err,status){
        if(err){
            throw new Error(err);
        }
    });
});