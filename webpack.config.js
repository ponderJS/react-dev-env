module.exports = {
    // 入口
    entry: "./app/hello.jsx",
    // 输出
    output: {
        path: "./build",
        filename: "main.js"
    },
    plugins: [ 
        // new webpack.CommonsChunkPlugin("common.js") //多个入口文件时可提取公共部分生成common.js文件
    ],
    // 表示这个依赖项是外部库，遇到require它不需要编译，在浏览器端对应window.React
    externals: {
      'react': 'window.React',
      'react-dom': 'window.ReactDOM'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, 
              loader: "babel-loader",
              query: {
                   presets: ['react'/*,'es2015'*/] //babel 6 模块化，所有内部组件都成为单独的包，此处是babel-loader插件预设
              }
            }
        ]
    }
};