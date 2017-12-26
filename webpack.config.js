var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    // 入口
    entry: {
        index: "./app/index.jsx"
    },
    // 输出
    output: {
        filename: "[name].[hash:6].js",
        path: __dirname + "/build"
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ExtractTextPlugin.extract({
                    use: {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[local]_[hash:6]',
                            modules: true,
                            url: false,
                            minimize: process.env.NODE_ENV == 'development' ? false : true
                        }
                    }
                })
            },
            {
                test: /\.js(x)?$/i,
                use: ["babel-loader"]
            }
        ]
    },
    plugins: [
        require('autoprefixer'),
        new ExtractTextPlugin({ filename: '[name].[hash:6].css' })
    ]
};