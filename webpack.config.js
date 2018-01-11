let path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // 入口
    entry: {
        index: './app/index.jsx'
    },
    // 输出
    output: {
        filename: '[name].[hash:6].js' + today(),
        path: path.resolve('./build')
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-router-dom': 'ReactRouterDOM'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ExtractTextPlugin.extract({
                    use: {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[local]_[hash:8]',
                            modules: true,
                            url: false,
                            minimize: process.env.NODE_ENV == 'production' ? true : false
                        }
                    }
                })
            },
            {
                test: /\.js(x)?$/i,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        require('autoprefixer'),
        new ExtractTextPlugin({ filename: '[name].[hash:6].css' }),
        new HtmlWebpackPlugin({
            template: './template.ejs',
            build: process.env.NODE_ENV == 'production' ? true : false
        })
    ]
}

function today() {
    let date = new Date(),
        month = date.getMonth() + 1,
        day = date.getDate();
    return process.env.NODE_ENV == 'production' ? '?'+date.getFullYear().toString() + (month < 10 ? '0' + month : month) + (day < 10 ? '0' + day : day):'';
}

