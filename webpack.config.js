
module.exports = {
    // 入口
    entry: {},
    // 输出
    output: {
        filename: "[name].js",
        path: __dirname + "/build"
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    module: {
        rules: [
            {
                test: /\.jsx$/i,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: []
};