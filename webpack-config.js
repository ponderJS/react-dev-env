let path = require('path'),
    appConfig = require('./app-config.json'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';
const style = ['libs/font-awesome.css', 'libs/normalize.css'];
const libs = ['libs/react.js', 'libs/react-dom.js', 'libs/react-router-dom.js'];


module.exports = {
    // 入口
    entry: {
        main: './app/main.jsx'
    },
    // 输出
    output: {
        filename: '[name].[hash:6].js',
        path: path.resolve('./build'),
        publicPath: appConfig.PUBLIC_PATH
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
                            minimize: isProduction
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
            libs: libs.map((d) => appConfig.PUBLIC_PATH + d.replace(/\.js$/i, isProduction ? '.min.js' : '.js')),
            style: style.map((d) => appConfig.PUBLIC_PATH + d.replace(/\.css$/i, isProduction ? '.min.css' : '.css'))
        })
    ]
}
