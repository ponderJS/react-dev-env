let webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vendor: ['react', 'react-dom'],
        index: './src/index.js'
    },
    output: {
        filename: '[id][hash].js',
        chunkFilename: '[chunkhash].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.less$/i,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {}
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                javascriptEnabled: true,
                                modifyVars: {
                                    // 变量替换时注意路径要嵌套一层引号，因此不能用变量
                                    '@icon-url': '"../../../../../src/assets/font_148784_v4ggb6wrjmkotj4i"'
                                }
                            }
                        }
                    ]
                })
            },
            {
                test: /\.js[x]?$/i,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images/'
                        }
                    }
                ]
            },
            {
                test: /\.(eot|woff|ttf|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
        new ExtractTextPlugin({ filename: '[contenthash].css' }),
        new HtmlWebpackPlugin({
            favicon: './src/favicon.ico',
            template: './src/index.html'
        })
    ]
}
