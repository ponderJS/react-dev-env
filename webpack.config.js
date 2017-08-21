module.exports = {
    // 入口
    entry: {
        index:"./app/js/index.jsx"
    },
    // 输出
    output: {
        filename:"[name].js",
        path:__dirname+"/build/js"
    },
    externals: {
        "react": "React",
        "react-dom":"ReactDOM",
        "react-router":"ReactRouter",
        "react-router-dom":"ReactRouterDOM",
        "axios":"axios"
    },
    module: {
        rules: [
            { test: /\.jsx$/, 
              use: ["babel-loader"]
            }
        ]
    },
    plugins:[]
};