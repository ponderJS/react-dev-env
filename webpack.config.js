var webpack=require("webpack");
module.exports = {
    // 入口
    entry: "./app/hello.jsx",
    // 输出
    output: {
        path: "./built",
        filename: "[name].js"
    },
    plugins: [ 
        // new webpack.CommonsChunkPlugin("common.js") //多个入口文件时可提取公共部分生成common.js文件
    ],
    // 表示这个依赖项是外部库，遇到require它不需要编译，在浏览器端对应window.React
    externals: {
      'react': 'window.React',
      'react-dom': 'window.ReactDOM'
    },
    // 凡是遇到jsx结尾的，都用jsx-loader这个插件来加载，且启用harmony模式(支持ES6语法)
    module: {
        loaders: [
            { test: /\.jsx$/,loader: "jsx-loader"}
        ]
    }
};